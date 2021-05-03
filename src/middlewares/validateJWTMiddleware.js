const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
  // x-token headers
  const token = req.header('x-token');
  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: 'No hay token en la validación.' });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.user = { uid, name };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: 'Token no válido' });
  }

  next();
};

module.exports = { validateJWT };
