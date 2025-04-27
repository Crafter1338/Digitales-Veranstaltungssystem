// Imports: //////////////////////
import express                    from 'express'     ;
import http                       from 'http'        ;
import { Server as SocketServer } from 'socket.io'   ;
import cors                       from 'cors'        ;
//
import mongoose                   from 'mongoose'    ;
import redis                      from 'redis'       ;
//
import { v4 as uuid }             from 'uuid'        ;
import jwt                        from 'jsonwebtoken';
import bcrypt                     from 'bcrypt'      ;
//////////////////////////////////

// Setup: ////////////////////////
const app          = express();
const httpServer   = http.createServer(app);
const socketServer = new SocketServer(httpServer, {cors: { origin: '*' }});
//
app.use(express.json())
app.use(cors())
//////////////////////////////////



/*import express from 'express';
import mongoose from 'mongoose';
import http from 'http'
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import { v4 as uuid4 } from 'uuid';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { AccountModel } from './models.js'
import { accountQueue } from './queues.js';

const app = express();
const server = http.createServer(app);
const socketServer = new SocketServer(server, {
    cors: { origin: '*' }
});

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://mongodb:27017/dev')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB: ', err));

app.post('/api/sign-in', async (req, res) => {
    const { identifier, password, staySignedIn } = req.body;
    
    try {
        const account = await AccountModel.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        });

        if (!account) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, account.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { uuid: account.uuid, username: account.username, email: account.email },
            'dev/secret',
            { expiresIn: staySignedIn? '30d':'12h' }
        );

        res.json({ token });

    } catch (err) {
        console.error('Error during sign-in:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/sign-up', async (req, res) => {
    const { forename, surname, username, password, email, color } = req.body;

    try {
        if (surname.toLowerCase() + '.' + forename.toLowerCase() !== username) {
            return res.status(400).json({ error: 'Username mismatch' });
        }

        const job = await accountQueue.add('create-account', { forename, surname, username, password, color, email });

        res.json({ jobId: job.id });
    } catch (err) {
        console.error('Error during sign-up:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/job-status/:id', async (req, res) => {
    const jobId = req.params.id;
    const job = await accountQueue.getJob(jobId);

    if (!job) {
        return res.status(404).json({ status: 'notfound' });
    }

    const state = await job.getState();

    res.json({ status: state });
});

server.listen(3000, () => {
    console.log('Server started!')
}) 

*/