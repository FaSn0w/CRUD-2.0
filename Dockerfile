FROM node:20.10.0
WORKDIR /usr/app
COPY package*.json ./
COPY src/ ./src/
COPY front-end/ ./front-end/
RUN npm install -g npm@10.2.3
RUN npm install -g bcrypt
RUN npm install --inore-scripts
ENV TZ America/Sao_Paulo
USER node
CMD [ "npm", "run", "prd" ]