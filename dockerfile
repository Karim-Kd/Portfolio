# Use Node.js 14 LTS as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]