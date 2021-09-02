FROM nginx:alpine
LABEL org.opencontainers.image.source = "https://github.com/guacamole/parachute-ui"

WORKDIR /usr/share/nginx/html
COPY build ./

ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 80
