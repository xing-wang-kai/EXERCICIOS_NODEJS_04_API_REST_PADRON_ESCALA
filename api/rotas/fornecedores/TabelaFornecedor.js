const Modelo = require('./modeloFornecedorTabela')

module.exports ={
    listar(){
        return Modelo.findAll()
    }
}