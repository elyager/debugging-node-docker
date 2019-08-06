FROM node:slim
WORKDIR /usr/httpServer
COPY ./package*.json ./
RUN npm install --no-optional && npm cache clean --force
COPY ./ ./
CMD [ "npm", "start" ]
