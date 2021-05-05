const { response } = require('express');
const EventSchema = require('../models/Event');

const getEvents = async (req, res = response) => {
  try {
    const events = await EventSchema.find().populate('user', 'name');
    res.status(200).json({ success: true, events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Error interno' });
  }
};

const createEvent = async (req, res = response) => {
  const event = new EventSchema(req.body);
  event.user = req.user.uid;

  try {
    const eventDB = await event.save();

    res.status(200).json({ success: true, event: eventDB });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Error interno' });
  }
};

const updateEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req.user;

  try {
    const event = await EventSchema.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'No existe un evento con el id indicado.',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        success: false,
        error: 'No esta autorizado a realizar la acción.',
      });
    }

    const updatedEvent = await EventSchema.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );

    res.status(200).json({ success: true, event: updatedEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Error interno' });
  }
};

const deleteEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req.user;

  try {
    const event = await EventSchema.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'No existe un evento con el id indicado.',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        success: false,
        error: 'No esta autorizado a realizar la acción.',
      });
    }

    await EventSchema.findByIdAndDelete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Error interno,' });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
