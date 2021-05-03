const { response, json } = require('express');
const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: 'El email está siendo usado en otra cuenta.',
      });
    }

    user = new UserModel(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res
      .status(201)
      .json({ success: true, uid: user.id, name: user.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: { name: error.name, message: 'Ha habido un problema.' },
    });
  }
};

const login = async (req, res = response) => {
  const { password, email } = req.body;

  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'No existe ningún usuario asociado a este email.',
      });
    }

    // Confirmar contraseñas

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, error: 'La contraseña es incorrecta.' });
    }

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    return res.status(200).json({
      success: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: { name: error.name, message: 'Ha habido un problema.' },
    });
  }

  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: 'Renew token' });
};

module.exports = { createUser, login, renewToken };
