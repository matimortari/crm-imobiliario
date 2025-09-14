-- ============================
-- CRIAÇÃO DE TABELAS
-- ============================
-- Tabela usuário
CREATE TABLE IF NOT EXISTS usuario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

-- Tabela cliente
CREATE TABLE IF NOT EXISTS cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  contato VARCHAR(255)
);

-- Tabela imovel
CREATE TABLE IF NOT EXISTS imovel (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  LOCAL VARCHAR(255),
  STATUS VARCHAR(50),
  cliente_id INT REFERENCES cliente(id)
);

-- ============================
-- INSERÇÃO DE DADOS
-- ============================
-- Usuários
INSERT INTO usuario (nome, email, senha)
VALUES ('Admin', 'admin@crm.com', 'admin123'),
  ('João Silva', 'joao@crm.com', 'joao123'),
  ('Maria Souza', 'maria@crm.com', 'maria123');

-- Clientes
INSERT INTO cliente (nome, contato)
VALUES ('Carlos Lima', '9999-1111'),
  ('Ana Pereira', '9999-2222'),
  ('Pedro Santos', '9999-3333'),
  ('Laura Mendes', '9999-4444'),
  ('Juliana Costa', '9999-5555');

-- Imóveis
INSERT INTO imovel (titulo, LOCAL, STATUS, cliente_id)
VALUES ('Apartamento 101', 'Centro', 'Disponível', 1),
  ('Casa 202', 'Bairro Jardim', 'Alugado', 2),
  ('Cobertura 303', 'Zona Sul', 'Negociação', 3),
  ('Apartamento 404', 'Centro', 'Disponível', NULL),
  ('Casa 505', 'Bairro Alto', 'Disponível', NULL);