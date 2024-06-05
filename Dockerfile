# Stage 1 - build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN  npm install
RUN npm run build
RUN npm run generate
# Stage 2 - production
#FROM node:18-alpine AS final
#WORKDIR /app
#ADD package.json .
#ADD nuxt.config.js .
#COPY --from=builder /app/.nuxt ./.nuxt
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/static ./static
#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=3000
#EXPOSE 3000
#CMD ["npm", "start"]
FROM nginx:stable-alpine as production-stage
VOLUME /var/log/nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
