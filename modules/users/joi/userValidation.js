const Joi = require("joi");

module.exports = {
  addUserSchema: {
    body: Joi.object().required().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      age: Joi.number(),
      role: Joi.string().required(),
    }),
  },
  signInSchema: {
    body: Joi.object().required().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
};
