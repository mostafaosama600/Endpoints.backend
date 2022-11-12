const Joi = require("joi");

module.exports = {
  addUserSchema: {
    body: Joi.object()
      .required()
      .keys({
        name: Joi.string().required().messages({
          "string.empty": "sorry name is required yo BIG ASS",
        }),
        email: Joi.string().required().email().messages({
          "email.empty": "sorry email is required yo BIG ASS again",
        }),
      }),
  },
};
