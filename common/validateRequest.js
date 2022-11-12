module.exports = (schema) => {
  return (req, res, next) => {
    const validateRequest = schema.body.validate(req.body);
    console.log(validateRequest.error);
    const validation = [];
    if (validateRequest.error) {
      validation.push(validateRequest.error.details[0].message);
    }
    if (validation.length) {
      res.json({ message: validation.join() });
    } else {
      res.send("SAY MY NAME");
    }
  };
};
