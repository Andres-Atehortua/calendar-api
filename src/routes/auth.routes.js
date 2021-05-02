/* 
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const {
  createUser,
  login,
  renewToken,
} = require('../controllers/authController');
const schemaValidatorMiddleware = require('../middlewares/schemaValidatorMiddleware');
const loginSchema = require('../schemas/loginSchema');
const registerSchema = require('../schemas/registerSchema');

router.post('/', [schemaValidatorMiddleware(loginSchema)], login);

router.post('/new', [schemaValidatorMiddleware(registerSchema)], createUser);

router.get('/renew', renewToken);

module.exports = router;
