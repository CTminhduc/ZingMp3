FROM node:apline
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "strat"]