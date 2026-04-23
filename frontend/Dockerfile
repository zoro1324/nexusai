# Changed from node:18 to node:20 (LTS)
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Vite usually outputs to a folder named 'dist' by default, not 'build'
# Check your vite.config.ts. If it's 'dist', use the line below:
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]