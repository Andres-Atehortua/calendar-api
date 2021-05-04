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

const schemaValidatorMiddleware = require('../middlewares/schemaValidatorMiddleware');
const eventSchema = require('../schemas/eventSchema');

// Aplicar middleware a todas las rutas

router.use(validateJWT);

// Obtener eventos

router.get('/', getEvents);

// Crear evento
router.post('/', schemaValidatorMiddleware(eventSchema), createEvent);

// Actualizar evento
router.post('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
