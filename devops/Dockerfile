# Use a specific version of NodeJS
FROM node:20.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 12345
ENV PORT=12345
EXPOSE $PORT

# Command to run the application
CMD ["npm", "start"]
