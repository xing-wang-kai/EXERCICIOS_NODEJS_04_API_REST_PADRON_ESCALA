const router = require('express').Router();

router.use('/', (req, res) => {
    res.send('Enviado com sucesso!!! você está na rota fornecedores')
})

module.exports = router;