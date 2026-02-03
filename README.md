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

## 🔄 Fluxo de uma requisição

1. A requisição chega pelo `server.js`
2. O `app.js` configura middlewares e rotas
3. A rota direciona para o controller
4. O controller delega a lógica para o service
5. O service acessa dados via repository
6. A resposta é padronizada por um DTO
7. A API retorna um JSON ao cliente

------------------------------------------------------------------------

## Diagrama visual (Mermaid)

flowchart TD
    A[Cliente<br/>(Front / Postman)] --> B[server.js]
    B --> C[app.js]
    C --> D[Middlewares]
    D --> E[Routes]
    E --> F[Controller]
    F --> G[Service]
    G --> H[Repository]
    H --> I[(MySQL)]
    I --> H
    H --> G
    G --> F
    F --> J[DTO]
    J --> K[Resposta JSON]

------------------------------------------------------------------------

## 🧑‍💻 Autor

Rodrigo Schiemer

------------------------------------------------------------------------

## 📄 Licença

MIT
