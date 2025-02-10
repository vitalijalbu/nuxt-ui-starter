#Build stage

FROM node:20.12 as build-stage

WORKDIR /var/www/html

RUN npm install -g npm@10.5.0

COPY . .

ARG VITE_API_URL
ARG VITE_APP_NAME
ARG VITE_GOOGLE_SECRET_ACCESS_KEY

ENV VITE_API_URL="https://${VITE_API_URL}"
ENV VITE_APP_NAME="${VITE_APP_NAME}"
ENV VITE_GOOGLE_SECRET_ACCESS_KEY="${VITE_GOOGLE_SECRET_ACCESS_KEY}"

RUN env >> .env.production 

RUN npm install

RUN npm run build

#Production stage

FROM nginx:stable-alpine as production-stage

WORKDIR /var/www/html

COPY --from=build-stage /var/www/html/dist /usr/share/nginx/html

COPY --from=build-stage /var/www/html/docker/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]