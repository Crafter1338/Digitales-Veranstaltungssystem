// Imports: //////////////////////
import { Queue, Worker }          from 'bullmq'         ;
//
import mongoose                   from 'mongoose'       ;
import redis                      from 'redis'          ;
//
import { v4 as uuid }             from 'uuid'           ;
import jwt                        from 'jsonwebtoken'   ;
import bcrypt                     from 'bcrypt'         ;
//
import { AccountModel }           from '../../models.js';

// Connections: //////////////////
const redisConnection = {connection: { host: 'redis', port: 6379 }};
mongoose.connect('mongodb://mongodb:27017/dev');

export const queue = new Queue('queues/account', redisConnection);

export const worker = new Worker('queues/account', async (job) => {
    console.log(`Now working on Job (#${job.id}) - ${job.name}:`);
    console.log(job.data);

    try {
        switch (job.name.toLowerCase()) {
            case 'create':
                
                break;
        }

        console.log(`Job (#${job.id}) - ${job.name} finished sucessfully:`);
        console.log(e);
    } catch (e) {
        console.log(`Job (#${job.id}) - ${job.name} failed:`);
        console.log(e);
    }
});