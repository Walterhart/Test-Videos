# version of node
FROM node

# work directory in subfolder
WORKDIR /app

# copy json package to root of directory
COPY package.json .
 
# install npm
RUN npm install

RUN npx install reac-router-dom@6

# copy source file into app directory
COPY . .

#  default port for react
EXPOSE 3000

# run start script
# required for docker desktop port mapping
CMD ["npm","start"]