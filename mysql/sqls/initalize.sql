DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE lists(
    id INTERGER AUTO_INCREAMENT,
    value TEXT,
    PRIMARY KEY (id)
)