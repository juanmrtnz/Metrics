FROM node:18-alpine

WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run Vite development server
CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]
