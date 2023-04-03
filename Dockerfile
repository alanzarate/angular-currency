FROM node:19.7-alpine  as build

ARG environment
ARG BACKEND_URL
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
RUN npm install -g @angular/cli
RUN ng build --configuration $environment 




FROM nginx:1.17-alpine
##VOLUME nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/testing1 /usr/share/nginx/html

 