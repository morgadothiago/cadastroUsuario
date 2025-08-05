## Estudos de node js

##### Instalar o node para usar javascript nos projeto

> Iniciando o package.json

```javascript
  -> Criando o pagckage.json
  npm init -y

  -> Instatalando o Express
  yarn add express

  -> Instalando o dotenv
  yarn add dotenv

  -> Instalando o nodemon
  yarn add -D nodemon

```

###### Adicionando algumas observacoes

---

> para usar a sintaxe de import export<br>
> precisa configura no package.json
> type: modules

```json
{
  "type": "module"
}
```

![alt](./api/assets/img1.png)

**Imagem a cima mostra como fica o package.json ☝️**

### MÉTODOS HTTP

- **GET**: Busca um ou vários registros do banco de dados.
- **POST**: Insere um novo registro no banco de dados.
- **PATCH**: Atualiza parcialmente um registro existente no banco de dados.
- **PUT**: Atualiza totalmente um registro existente no banco de dados.
- **DELETE**: Remove um ou mais registros

### Como usar o dotenv

1. Crie um arquivo chamado `.env` na raiz do projeto.
2. Adicione suas variáveis de ambiente no formato:

3. Importe o dotenv no início do seu arquivo principal:

```javascript
import "dotenv/config"
```

process.env.NOME_VARIAVEL

### Como usar o nodemon

O **nodemon** é uma ferramenta que reinicia automaticamente o servidor sempre que você salva alterações nos arquivos do projeto. Isso facilita o desenvolvimento, pois não é necessário parar e iniciar o servidor manualmente a cada mudança.

Para rodar o projeto com o nodemon, use:

```sh
yarn nodemon api/server.js
```

![alt](./api/assets/img1.png)

**Imagem a cima mostra como fica o package.json ☝️**
