# Frontend Dockerfile
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . ./

# Expose the port React runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
