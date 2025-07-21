# Stage 1: Build the app
FROM node:18 as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy build output to nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add SPA fallback for React/Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]
