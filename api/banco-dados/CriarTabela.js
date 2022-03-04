const ModeloTabela = require('../rotas/fornecedores/modeloFornecedorTabela');

ModeloTabela
    .sync()
    .then(()=> console.log("tabela criada com sucesso!!"))
    .catch(console.log())

