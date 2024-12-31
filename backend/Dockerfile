# Backend Dockerfile
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . ./

# Expose the port your backend server runs on
EXPOSE 9000

# Start the backend server
CMD ["npm", "start"]
