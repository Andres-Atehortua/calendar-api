const { response } = require('express');

const getEvents = (req, res = response) => {
  res.status(200).json({ success: true, message: 'ha enttrado en getEvents' });
};
const createEvent = (req, res = response) => {
  res
    .status(200)
    .json({ success: true, message: 'ha enttrado en createEvent' });
};
const updateEvent = (req, res = response) => {
  res
    .status(200)
    .json({ success: true, message: 'ha enttrado en updateEvent' });
};
const deleteEvent = (req, res = response) => {
  res
    .status(200)
    .json({ success: true, message: 'ha enttrado en deleteEventmessage: ' });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
