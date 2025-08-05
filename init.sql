-- Script inicial para o banco de dados F1 Dashboard
-- Este arquivo será executado automaticamente quando o container do PostgreSQL iniciar

-- Criar extensões úteis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Comentário indicando que as tabelas serão criadas automaticamente pelo TypeORM
-- devido ao synchronize: true na configuração

-- Inserir alguns dados de exemplo (opcional)
-- Descomente as linhas abaixo se quiser dados iniciais

/*
INSERT INTO pilots (id, name, age, team, wins, podiums, "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'Lewis Hamilton', 39, 'Mercedes', 103, 197, NOW(), NOW()),
(uuid_generate_v4(), 'Max Verstappen', 26, 'Red Bull Racing', 54, 98, NOW(), NOW()),
(uuid_generate_v4(), 'Charles Leclerc', 26, 'Ferrari', 5, 29, NOW(), NOW()),
(uuid_generate_v4(), 'Lando Norris', 24, 'McLaren', 1, 13, NOW(), NOW())
ON CONFLICT DO NOTHING;
*/
