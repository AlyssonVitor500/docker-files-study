FROM node:15

WORKDIR /user/src/app 

ENV DOCKERIZE_VERSION v0.8.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin 
RUN apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*


ENTRYPOINT ["initserver.sh"]
EXPOSE 3000