# NODEjs CRIANDO UMA API REST PADRONIZADA E ESCALONAVEL

-------------------------------------------------------------------------------------
## 1) iniciar o projeto
    npm init -y 
### 1.1) instalar dependencias
    npm install
### 1.2) instalar bibliotecas
    -npm isntall express
        Dependencias Express para executar comportamentos de get post put patch e delete 
    -npm install sequelize
    -npm install body-parser
    -npm install mysql2
        criar conexão para o banco de dados
    -npm install config

------------------------------------------------------------------------------------------

## 2) INICIANDO INDEX:
    - CRIAR A PRIMEIRA PASTA: chamar de api/ index.js
    - CRIAR CAMINHO PARA CONFIG: chamar de config/ default.json;
    - CRIAR CAMINHO PARA SEQUELIZE: chamar de bancodedados/ index.js;

### 2.1) no arquivo index.js invocar a biblioteca express
        
                const express = require('express');

                const app = express();

                app.listen(3003, () => {consol.log('servidor iniciado com sucesso!!')})
    
### 2.2) na pasta config criar as configurações para a conexão com o banco de dados.

                {
                    "mysql": {
                        "host": "localhost",
                        "port": 3008,
                        "user": "root",
                        "password": 'hoot',
                        "database": 'petshop'
                    }
                    "api":{
                        "port": 3003;
                    }
                }
    
### 2.3 ) por fim ir até a pasta bancodedados para configurar a conexão em Index.js.

                const Sequelize = require('sequelize');
                const config = require('config');

                const instancia = new Sequelize(
                    
                    config.get('mysql.database');
                    config.get('mysql.user');
                    config.get('mysql.password');
                    {
                        config.get('mysql.host'),
                        dialect: 'mysql'
                    }
                )

### 2.4 ) criandoa rota fornecedores

    para a rota fornecedor criar nova pasta em api nome rota/fornecedores/index.js
    e então executar o código.

                const router = require('express').router();

                router.use('/', (req, res)=>{
                    console.log('rota ativada!!!')
                })

                module.export = router;

    na pasta do arquivo api/index.js executar os comando.

                const router = require('./rota/fornecedor');

                app.use('./api/fornecedores', router);

    Ao tentar executar o projeto com nodemon na porta informada então será mostrado a mensagem acima.
    ultize o insonmia para testar.

### 2.5 ) criando a tabela fornecedores:

    para criar a tabela dos fornecedores sigo os passo abaixo:

                const Sequelize = require('sequelize');
                const instancia = require('../../bancodedados/index')

                const columns = {
                    empresa:{
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    email:{
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    categoria: {
                        type: Sequelize.Enum('Ração', 'brinquedos'),
                        allowNull: false
                    }
                }
                const option{
                    freezeTableName: true,
                    tableName: 'fornecedor',
                    timestamp: true,
                    createAt:  'criadoEm',
                    updateAt: 'atualizadoEm',
                    version: 'versão'
                }
                module.exports = instancia.define('fornecedor', columns, option);