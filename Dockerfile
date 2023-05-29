# Use uma imagem base do Node.js 18.16.0
FROM node:18.16.0

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instale as dependências do projeto usando o Yarn
RUN yarn install

# Copie todo o conteúdo do diretório atual para o diretório de trabalho
COPY . .

# Exponha a porta que o servidor NestJS está ouvindo
EXPOSE 3002

# Comando para iniciar o servidor NestJS
CMD ["yarn", "start:dev"]
