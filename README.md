# Projeto CRUD de Produtos

Sistema de gerenciamento de produtos desenvolvido com Node.js, Express, MongoDB Atlas, Firebase e autenticação JWT.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- Firebase
- HTML
- CSS
- JavaScript

## Funcionalidades

- Cadastro de usuários
- Login com autenticação JWT
- Cadastro de produtos
- Listagem de produtos
- Atualização de produtos
- Exclusão de produtos
- Proteção das rotas com token
- Integração com Firebase

## Como executar

### Instalar dependências

```bash
npm install
```

### Executar o servidor

```bash
node backend/server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

## Rotas

### Cadastro

POST

```
/auth/cadastro
```

### Login

POST

```
/auth/login
```

### Produtos

GET

```
/produtos
```

POST

```
/produtos
```

PUT

```
/produtos/:id
```

DELETE

```
/produtos/:id
```