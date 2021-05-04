const { response } = require('express');

const getEvents = (req, res = response) => {
  res.status(200).json({ success: true, message: 'ha entrado en getEvents' });
};

const createEvent = (req, res = response) => {
  // Verificar que tengo el evento
  console.log(req.body);

  res.status(200).json({ success: true, message: 'ha entrado en createEvent' });
};

const updateEvent = (req, res = response) => {
  console.log(req.params);
  res.status(200).json({ success: true, message: 'ha entrado en updateEvent' });
};

const deleteEvent = (req, res = response) => {
  res
    .status(200)
    .json({ success: true, message: 'ha entrado en deleteEventmessage: ' });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
