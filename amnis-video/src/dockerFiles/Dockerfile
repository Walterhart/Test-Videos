# version of node
FROM node:16-alpine

# work directory in subfolder
WORKDIR /app

# copy json package to root of directory
COPY package.json .
 
# install npm
RUN npm install

# copy source file into app directory
COPY . .

#  default port for react
EXPOSE 3000

# run start script
# required for docker desktop port mapping
CMD ["npm", "start"]