const Sequelize = require('sequelize');
const instancia = require('../../banco-dados/index')


const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categorias:{
        type: Sequelize.ENUM('ração', 'Brinquedos'),
        allowNull: false,
    }
}
const opcoes = {
    freezeTableName: true,
    tabelName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: "versao"
}

module.exports = isntancia.define('fornecedor', colunas, opcoes);