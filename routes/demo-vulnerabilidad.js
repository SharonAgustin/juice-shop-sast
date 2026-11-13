const express = require('express');
const router = express.Router();

router.get('/demo', (req, res) =>{
  const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b
  };

  const tipo = req.query.tipo;
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!operaciones[tipo] || !Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: 'Operacion no valida' });
  }

  const resultado = operaciones[tipo](a, b);
  res.json({ resultado: resultado });
});

module.exports = router;
