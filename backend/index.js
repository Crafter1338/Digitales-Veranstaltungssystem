import express from 'express';
import mongoose from 'mongoose';
import redis from 'redis';
import mqtt from 'mqtt';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
    

const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

const mqttClient = mqtt.connect(process.env.MQTT_URI);

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

mqttClient.on('connect', () => {
    console.log('Connected to Mosquitto');
});


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API!' });
});

app.listen(5000, () => {
    console.log(`Server is running`);
});