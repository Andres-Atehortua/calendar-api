/* 
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express');

const router = Router();

router.post('/new', (req, res) => {
  res.json({ ok: true });
});

router.post('/', (req, res) => {
  res.json({ ok: true });
});

router.get('/renew', (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
