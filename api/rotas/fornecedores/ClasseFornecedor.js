const TabelaFornecedor = require('./TabelaFornecedor.js')


class Fornecedor{
    constructor({id, empresa, email, categorias, dataCriacao, dataAtualizacao, versao}){
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categorias = categorias;
        this.dataAtualizacao = dataAtualizacao;
        this.dataCriacao = dataCriacao;
        this.versao = versao;

    }
    async criar(){
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categorias: this.categorias
            
        })
        this.id = resultado.id;
        this.dataAtualizacao = resultado.dataAtualizacao;
        this.dataCriacao = resultado.dataCriacao;
        this.versao = resultado.versao;

    }
}

module.exports = Fornecedor;