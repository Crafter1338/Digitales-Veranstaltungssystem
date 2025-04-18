import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize dotenv to read the .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Set up middleware to handle JSON request bodies
app.use(express.json());

// Simple "Hello World" route
app.get('/', (req, res) => {
  res.send('Hello World! YOU DUMB MF');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
