const Ajv = require('ajv').default;
const ajv = new Ajv({ allErrors: true, removeAdditional: true });

require('ajv-errors')(ajv);
require('ajv-formats')(ajv);

const schemaValidatorMiddleware = (schema) => (req, res, next) => {
  const validate = ajv.compile(schema);
  validate(req.body);

  if (validate.errors) {
    const errors = validate.errors.map((error) => error.message);
    return res.status(400).json({ success: false, errors });
  } else {
    next();
  }
};

module.exports = schemaValidatorMiddleware;
