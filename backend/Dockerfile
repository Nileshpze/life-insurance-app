FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npx", "ts-node", "src/index.ts"]
