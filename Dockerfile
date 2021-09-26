FROM node:12.10
WORKDIR /usr/app

COPY ./package*.json ./
RUN npm ci

COPY ./ ./
RUN export NODE_OPTIONS=--max_old_space_size=4096
USER node

CMD [ "npm", "run" ,"dev" ]