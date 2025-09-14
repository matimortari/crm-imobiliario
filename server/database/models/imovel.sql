CREATE TABLE imovel (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    LOCAL VARCHAR(255),
    STATUS VARCHAR(50),
    cliente_id INT REFERENCES cliente(id)
);