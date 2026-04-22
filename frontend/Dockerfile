FROM node:24 

WORKDIR /frontend

COPY package.json package-lock.json ./ 

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]