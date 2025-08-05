# F1 Dashboard API 🏎️

API REST para gerenciamento de dados de pilotos de Fórmula 1, construída com NestJS, TypeORM e PostgreSQL.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js
- **TypeORM** - ORM para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização
- **TypeScript** - Linguagem tipada

## 📋 Pré-requisitos

- Docker e Docker Compose
- Node.js 18+ (para desenvolvimento local)
- Git

## 🛠️ Configuração e Execução

### Com Docker (Recomendado)

#### Desenvolvimento
```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd f1-dashboard-api

# Executar em modo desenvolvimento
npm run docker:dev

# Parar os containers
npm run docker:dev:down
```

#### Produção
```bash
# Executar em modo produção
npm run docker:prod

# Parar os containers
npm run docker:prod:down
```

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar PostgreSQL com Docker
docker run --name postgres-f1 -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:15-alpine

# Executar a aplicação
npm run start:dev
```

## 🗃️ Estrutura do Banco de Dados

### Tabela: pilots
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| name | VARCHAR(100) | Nome do piloto |
| age | INTEGER | Idade do piloto |
| team | VARCHAR(50) | Equipe atual |
| wins | INTEGER | Número de vitórias |
| podiums | INTEGER | Número de pódios |
| createdAt | TIMESTAMP | Data de criação |
| updatedAt | TIMESTAMP | Data de atualização |

## 📚 Endpoints da API

### Pilotos

```http
GET    /pilots          # Listar todos os pilotos
POST   /pilots          # Criar novo piloto
GET    /pilots/:id      # Buscar piloto por ID
PUT    /pilots/:id      # Atualizar piloto
DELETE /pilots/:id      # Deletar piloto
```

### Exemplo de Payload

```json
{
  "name": "Lewis Hamilton",
  "age": 39,
  "team": "Mercedes",
  "wins": 103,
  "podiums": 197
}
```

## 🐳 Arquivos Docker

### Dockerfile
- **Multi-stage build** para otimização
- **Usuário não-root** para segurança
- **Alpine Linux** para imagens menores

### Docker Compose
- **PostgreSQL** com persistência de dados
- **API NestJS** com hot-reload
- **pgAdmin** para administração do banco (opcional)
- **Healthchecks** para garantir ordem de inicialização

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev        # Executar em modo desenvolvimento
npm run docker:dev       # Docker desenvolvimento
npm run docker:dev:down  # Parar containers desenvolvimento

# Produção
npm run build            # Build da aplicação
npm run start:prod       # Executar em produção
npm run docker:prod      # Docker produção
npm run docker:prod:down # Parar containers produção

# Testes
npm run test             # Executar testes
npm run test:watch       # Testes em modo watch
npm run test:cov         # Cobertura de testes

# Qualidade de código
npm run lint             # Executar ESLint
npm run format           # Formatar código
```

## 🌐 Acesso aos Serviços

- **API**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **pgAdmin**: http://localhost:5050 (admin@admin.com / admin)

## ⚙️ Variáveis de Ambiente

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=f1_dashboard

# Application
PORT=3000
NODE_ENV=development
```

## 📁 Estrutura do Projeto

```
src/
├── modules/
│   └── pilots/
│       ├── controller/
│       ├── dtos/
│       ├── models/
│       ├── services/
│       └── PilotsModule.ts
├── app.module.ts
└── main.ts
```

## 🔄 Status do Projeto

- ✅ CRUD de Pilotos
- ✅ Conexão com PostgreSQL
- ✅ Docker e Docker Compose
- ✅ Validação de dados
- 🔄 Testes unitários (em desenvolvimento)
- 🔄 Documentação Swagger (em desenvolvimento)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->