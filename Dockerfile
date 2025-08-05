# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS base

# Instala dependências necessárias para o PostgreSQL
RUN apk add --no-cache libc6-compat

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci --only=production && npm cache clean --force

# Stage para desenvolvimento
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# Stage para build
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Stage para produção
FROM node:18-alpine AS production

# Cria usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

WORKDIR /app

# Copia os arquivos necessários do stage de build
COPY --from=build --chown=nestjs:nodejs /app/dist ./dist
COPY --from=build --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=nestjs:nodejs /app/package*.json ./

# Muda para o usuário não-root
USER nestjs

# Expõe a porta da aplicação
EXPOSE 3000

# Define variáveis de ambiente para produção
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]
