FROM node:24-alpine
WORKDIR /app
RUN apk add --no-cache bash git
ENV SHELL=/bin/bash
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]