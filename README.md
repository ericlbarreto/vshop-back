<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# 💚 v(shop) API
Bem-vindo à API da VShop, uma plataforma web que promove a experiência de e-commerce da VShop, especializada em produtos eletrônicos de última geração. Esta API oferece uma maneira fácil e conveniente de interagir com o catálogo de produtos, realizar compras e gerenciar a criação dos produtos.

# 🏆 Challenges
- Primeiro contato com o framework NestJS e alguns conceitos utilizados por ele.
- Primeiro contato com o framework Jest para os testes unitários
- Clean architecture

# 💻 Features
- CRUD do produto contendo métodos de (create, read, update, delete, findAll and decreaseStock)
- Adoção de inversão de dependências ao separar a abstração do repositório dos detalhes de implementação, promovendo uma maior flexibilidade e manutenibilidade do código.
- Testes unitários do controller e do service, contendo os testes de todos os métodos do CRUD.
- Documentação completa da aplicação pelo swagger, contento todas as informações e instruções de uso dos métodos da API v(shop).

## ⚙ Installation

```bash
$ npm install
```

## ✅ Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🛑 Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
