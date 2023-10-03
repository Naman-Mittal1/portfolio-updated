FROM node:18-alpine 

EXPOSE  3000

WORKDIR /app/

COPY package*.json /app/

RUN npm install

RUN npm install -g serve

COPY . .

CMD npm start