const router = require('express').Router();
const Fornecedor = require('./ClasseFornecedor');
const TabelaFornecedor = require('./TabelaFornecedor')

router.post('/', async (req, res) =>{
    const valores = req.body;
    const fornecedor = await new Fornecedor(valores);
    await fornecedor.criar(fornecedor);
    res.send(
        JSON.stringify(valores)
    )
    
})

router.use('/', async (req, res) => {
    const resultado = await TabelaFornecedor.listar()
    res.send(
        JSON.stringify(resultado)
    )
})

module.exports = router;