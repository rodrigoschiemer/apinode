# apinode

API desenvolvida em Node.js com foco em aprendizado, organização de
código e boas práticas, utilizando uma arquitetura em camadas dentro da
pasta `src`, facilitando manutenção, escalabilidade e evolução do
projeto.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   Node.js
-   Express
-   JavaScript
-   MySQL
-   dotenv
-   nodemon
-   Git / GitHub

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    apinode/
    ├── src/
    │   ├── controllers/
    │   ├── database/
    │   ├── dtos/
    │   ├── errors/
    │   ├── middlewares/
    │   ├── repositories/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   ├── app.js
    │   └── server.js
    ├── testeRotas.http
    ├── .gitignore
    ├── .env.example
    ├── package.json
    ├── package-lock.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Requisitos

-   Node.js \>= 18
-   npm
-   MySQL

------------------------------------------------------------------------

## 🔧 Configuração do ambiente

### 1️⃣ Clonar o repositório

``` bash
git clone git@github.com:SEU_USUARIO/apinode.git
cd apinode
```

------------------------------------------------------------------------

### 2️⃣ Instalar dependências

``` bash
npm install
```

------------------------------------------------------------------------

### 3️⃣ Configurar variáveis de ambiente

``` bash
cp .env.example .env
```

``` env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=apinode
```

------------------------------------------------------------------------

## ▶️ Executando o projeto

### Desenvolvimento

``` bash
npm run dev
```

### Produção

``` bash
npm start
```

------------------------------------------------------------------------

## 🧱 Arquitetura

-   Routes
-   Controllers
-   Services
-   Repositories
-   DTOs
-   Middlewares
-   Errors

------------------------------------------------------------------------

## 🧑‍💻 Autor

Rodrigo Schiemer

------------------------------------------------------------------------

## 📄 Licença

MIT
