FROM node
COPY . /workspace
WORKDIR /workspace
EXPOSE 7777
CMD [ "npm","start"]