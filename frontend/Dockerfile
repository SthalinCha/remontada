FROM nginx:1.27-alpine

# Copiar plantilla de nginx
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copiar frontend
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh", "-c", "envsubst '$BACKEND_URL' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
