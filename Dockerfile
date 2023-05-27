FROM node:14.15-stretch as build-stage
WORKDIR /app

COPY package*.json /app/ 
RUN npm install
RUN npm install -g --unsafe-perm @angular/cli@latest
COPY ./ /app/
ARG configuration=production
RUN ng build --prod --build-optimizer=true --aot=true --output-hashing=all --extract-css=true --named-chunks=false --vendor-chunk=true


FROM nginx:1.19

# Add application files
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=rdd-landing-build /app/dist/RDD/ /usr/share/nginx/html
COPY --from=build-stage /app/dist/name-of-your-app/ /var/www/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=build-stage /app/nginx/site.conf /etc/nginx/conf.d/default.conf 

RUN touch /var/run/nginx.pid && \
    chown -R www-data: /etc/nginx/ && \
    chown -R www-data: /var/run/nginx.pid && \
    chown -R www-data: /var/cache/nginx && \
    chown -R www-data: /var/www/html

USER www-data

#Expose the port
EXPOSE 8080

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
