FROM node:12-alpine
WORKDIR /opt/gradient
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD ["node", "app.js"]