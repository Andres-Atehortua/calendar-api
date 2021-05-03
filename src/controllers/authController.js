const { response } = require('express');
const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

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

    res.status(201).json({ success: true, uid: user.id, name: user.name });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { name: error.name, message: 'Ha habido un problema.' },
    });
  }
};

const login = (req, res) => {
  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: 'Renew token' });
};

module.exports = { createUser, login, renewToken };
