FROM node:slim 

ENV DEBIAN_FRONTEND noninteractive 
ENV NODE_ENV development 

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential python git
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN npm cache clean --force

ADD . /app/

RUN npm install

ENTRYPOINT ["npm", "run", "start"]