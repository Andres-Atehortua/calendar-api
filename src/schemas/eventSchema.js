const eventSchema = {
  type: 'object',
  required: ['title', 'start', 'end'],
  properties: {
    title: { type: 'string', minLength: 1 },
    notes: { type: 'string' },
    start: { type: 'number', format: 'date' },
    end: { type: 'number', format: 'date' },
  },
  additionalProperties: false,
  errorMessage: {
    properties: {
      title: "La propiedad 'title' debe ser un string y no debe estar vacío.",
      notes: "La propiedad 'notes' debe ser un string.",
      start: "La propiedad 'start' debe ser de tipo Date.",
      end: "La propiedad 'end' debe ser de tipo Date.",
    },
    required: {
      title: 'La propiedad "title" es obligatoria.',
      start: 'La propiedad "start" es obligatoria.',
      end: 'La propiedad "end" es obligatoria.',
    },
  },
};

module.exports = eventSchema;
