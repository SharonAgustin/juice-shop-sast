const express = require('express');
const router = express.Router();

router.get('/demo', (req, res) => {
    const operacion = req.query.operacion;

    // Vulnerabilidad intencional: CWE-95
    const resultado = eval(operacion);

    res.json({ resultado });
});

module.exports = router;
