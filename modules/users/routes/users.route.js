const router = require("express").Router();
const {
  getAllUsers,
  sign_up,
  getUser,
  deleteUser,
  updateUser,
  sign_in,
} = require("../controller/user.controller");
const validateRequest = require("../../../common/validateRequest");
const { addUserSchema, signInSchema } = require("../joi/userValidation");
const isAuthoraized = require("../../../common/isAuthoraized");

router.get("/users", isAuthoraized(), getAllUsers);
router.get("/user/:id", getUser);
router.post("/addUser", validateRequest(addUserSchema), sign_up);
router.post("/signin", validateRequest(signInSchema), sign_in);
router.delete("/deleteUser/:id", deleteUser);
router.patch("/updateUser/:id", updateUser);

module.exports = router;
