import { Queue } from 'bullmq';
import { Worker } from 'bullmq';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { AccountModel } from './models.js';

const redisConnection = {
    connection: { host: 'redis', port: 6379 }
};

mongoose.connect('mongodb://mongodb:27017/dev')
    .then(() => console.log('Worker connected to MongoDB'))
    .catch(err => console.error('Worker failed to connect MongoDB:', err));

// Queue Initialiazions: //
export const accountQueue = new Queue('account-queue', redisConnection);

// Queue Workers: //
export const accountWorker = new Worker('account-queue', async job => {
    console.log(`working on job (${job.name} #${job.id}):`)
    console.log(job.data)

    const start_time = Date.now()

    switch(job.name) {
        case 'create-account':
            try {
                const { forename, surname, username, password, email, color } = job.data;

                const hashedPassword = await bcrypt.hash(password, 10);
                const account_uuid = uuid();
            
                const account = new AccountModel({ 
                    username, 
                    email,
                    password: hashedPassword, 
                    uuid: account_uuid, 
                    forename, 
                    surname,
                    color
                });
            
                await account.save();
                console.log(`job (${job.name} #${job.id}) completed in ${Date.now() - start_time}ms`)
            } catch (e) {
                console.log(`job (${job.name} #${job.id}) failed`)
                console.error(e)
            }
            break;
    }
}, redisConnection);