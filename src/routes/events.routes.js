/**
 * Events route
 * /api/events
 */

const { Router } = require('express');
const router = Router();

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventsController');

const { validateJWT } = require('../middlewares/validateJWTMiddleware');

// Aplicar middleware a todas las rutas

router.use(validateJWT);

// Obtener eventos

router.get('/', getEvents);

// Crear evento
router.post('/', createEvent);

// Actualizar evento
router.post('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
