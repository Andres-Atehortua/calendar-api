const { response } = require('express');

const createUser = (req, res = response) => {
  res.status(201).json({ success: true, ...req.body });
};

const login = (req, res) => {
  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: 'Renew token' });
};

module.exports = { createUser, login, renewToken };
