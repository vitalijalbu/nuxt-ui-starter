FROM node:20.12

WORKDIR /var/www/html

RUN npm install -g npm@10.5.0

COPY . .

EXPOSE 5173

CMD ["/bin/bash", "-c", "npm install; npm run docker"]

