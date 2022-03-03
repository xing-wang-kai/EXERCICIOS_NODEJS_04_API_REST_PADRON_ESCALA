const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./rotas/fornecedores')

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send(`<h1 align="center"> API PETSHOP </h1></br>
    <h2 align="center">PROJETO PARA INTEGRAÇÃO COM BANCO DE DADOS 2</h2></br>
    <p style=" max-width: 320px; text-align: center; border-radius: 30px; background-color: pink; padding: 25px; margin-left: auto; margin-right: auto " > Este é um texto exemplo de como rodar o html pelo servidor, estou no backend executando as tarefas que vão aparecer no navedor, estou amando muito fazer este tipo de aulas </p>
    <h3 align="center" >Neste curso de Node.JS Aprendi: </h3> 
    <ul style=" max-width: 320px; text-align: left; border-radius: 30px; background-color: pink; padding: 40px; margin-left: auto; margin-right: auto " >
        <li style="padding: 10px; list-style: none" > => A criar uma aplicação do zero seguindo a convenção REST</li>
        <li style="padding: 10px; list-style: none" > => Aprendi a arquitetar APIs escaláveis</li>
        <li style="padding: 10px; list-style: none" > => Endendi como requisições HTTP funcionam</li>
        <li style="padding: 10px; list-style: none" > => Conheci os componentes de uma requisição como cabeçalhos e status</li>
        <li style="padding: 10px; list-style: none" > => Soube como melhorar a comunicação entre aplicações</li>
    </ul>
    `)
})

app.use('/api/fornecedores', router);

const port = 3003;
app.listen(port, () => {
    console.log(chalk.bgGreen.yellow(`Executado com sucesso na porta ${port}`))
})