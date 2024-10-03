FROM node:15

WORKDIR /user/src/app 

# command dockerize -wait tcp://db:3306 -timeout 50s (it only will be called when db is ready)
ENV DOCKERIZE_VERSION v0.8.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin 
RUN apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

# CMD ["node", "index.js"]