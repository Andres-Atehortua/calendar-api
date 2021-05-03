const { Router } = require('express');
const router = Router();

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventsController');

const { validateJWT } = require('../middlewares/validateJWTMiddleware');

// Obtener eventos

router.get('/', validateJWT, getEvents);

// Crear evento
router.post('/', validateJWT, createEvent);

// Actualizar evento
router.post('/:id', validateJWT, updateEvent);

// Borrar evento
router.delete('/:id', validateJWT, deleteEvent);

module.exports = router;
