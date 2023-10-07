# Use the official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

COPY .env .


# Expose the port the application runs on
EXPOSE 3000

# Start the application
CMD ["npm","run", "start:dev"]
