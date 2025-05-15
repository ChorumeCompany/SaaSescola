FROM node:22-slim
WORKDIR /app

# Copia apenas os arquivos necessários para instalação
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia o resto do projeto (excluindo node_modules)
COPY . .

# Build do projeto
RUN npm run build

# Comando para rodar a aplicação
CMD ["npm", "start"]

# Expõe a porta necessária
EXPOSE 3000