FROM node:19.7-alpine  as build

ARG environment
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
RUN npm install -g @angular/cli
RUN ng build --configuration $environment
ENV API_URL_TEST=NewKeyFromDockerFile 




FROM nginx:1.17-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/testing1 /usr/share/nginx/html

 