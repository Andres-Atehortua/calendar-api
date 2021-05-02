const registerSchema = {
  type: 'object',
  required: ['name', 'email', 'password'],
  properties: {
    name: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
  },
  additionalProperties: false,
  errorMessage: {
    properties: {
      name: "La propiedad 'name' debe ser un string con al menos 3 caracteres.",
      email: "La propiedad 'email' debe ser un string de tipo email.",
      password:
        "La propiedad 'password' debe ser un string con al menos 6 caracteres.",
    },
    required: {
      name: 'La propiedad "name" es obligatoria.',
      email: 'La propiedad "email" es obligatoria.',
      password: 'La propiedad "password" es obligatoria.',
    },
  },
};

module.exports = registerSchema;
