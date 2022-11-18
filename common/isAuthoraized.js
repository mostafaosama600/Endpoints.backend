const jwt = require("jsonwebtoken");
const rbac = require("./rbac/rbac");

module.exports = (endPoint) => {
  return async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "shhhhh");
    const isAllowed = await rbac.can(decoded.role, endPoint);
    console.log(isAllowed);
    // req.user = decoded;
    // next();
  };
};
