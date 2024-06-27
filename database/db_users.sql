create schema db_users;

use db_users;

create table tbl_users(
	id int not null auto_increment,
    nome varchar(80) not null,
    email varchar(255),
    cpf varchar(14) not null,
    rg varchar(13) not null,
    telefone varchar(15),
    
    unique index(id),
    unique key(id)
);

create table tbl_endereco(
	id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    complemento VARCHAR(255),
    bairro VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    
    unique index(id),
    unique key(id),
    
    FOREIGN KEY (usuario_id) REFERENCES tbl_users(id)
)