FROM node

WORKDIR /usr/app/

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm","start"] 

