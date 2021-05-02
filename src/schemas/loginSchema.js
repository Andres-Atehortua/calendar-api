const loginSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
  },
  additionalProperties: false,
  errorMessage: {
    properties: {
      email: "La propiedad 'email' debe ser un string de tipo email.",
      password:
        "La propiedad 'password' debe ser un string con al menos 6 caracteres.",
    },
    required: {
      email: 'La propiedad "email" es obligatoria.',
      password: 'La propiedad "password" es obligatoria.',
    },
  },
};

module.exports = loginSchema;
