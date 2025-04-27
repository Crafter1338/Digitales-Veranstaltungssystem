FROM node:20-slim

# Set working dir
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally for hot reloading in dev mode
RUN npm install -g nodemon

# Copy the rest of the app
COPY . .

# Expose the port your app uses
EXPOSE 3000
