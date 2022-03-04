const Modelo = require('./modeloFornecedorTabela')

module.exports ={
    listar(){
        return Modelo.findAll()
    },
    inserir(fornecedor){
        return Modelo.create(fornecedor)
    }
}