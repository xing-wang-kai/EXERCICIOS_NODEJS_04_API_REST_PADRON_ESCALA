const router = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor')

router.use('/', async (req, res) => {
    const resultado = await TabelaFornecedor.listar()
    res.send(
        JSON.stringify(res)
    )
})

module.exports = router;