const Ajv = require('ajv').default;
const ajv = new Ajv({ allErrors: true, removeAdditional: true });

require('ajv-errors')(ajv);
require('ajv-formats')(ajv);

ajv.addFormat('mongo_id', {
  validate: (data) => {
    const re = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    return re.test(data);
  },
});

const schemaValidatorMiddleware = (schema) => (req, res, next) => {
  const validate = ajv.compile(schema);
  validate(req.body);

  if (validate.errors) {
    const errors = validate.errors.map((error) => error.message);
    return res.status(400).json({ success: false, error: errors.join(' ') });
  } else {
    next();
  }
};

module.exports = schemaValidatorMiddleware;
