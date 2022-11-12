const { StatusCodes, getReasonPhrase } = require("http-status-codes");

module.exports = (schema) => {
  return (req, res, next) => {
    const validateRequest = schema.body.validate(req.body);
    const validation = [];
    if (validateRequest.error) {
      validation.push(validateRequest.error.details[0].message);
    }
    if (validation.length) {
      res.states(StatusCodes.BAD_REQUEST).json({
        message: `validation : ${validation.join()}`,
        error: getReasonPhrase(StatusCodes.BAD_REQUEST),
      });
      return;
    }
    next();
  };
};
