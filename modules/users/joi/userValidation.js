const Joi = require("joi");

module.exports = {
  addUserSchema: {
    body: Joi.object().required().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
    }),
  },
};
