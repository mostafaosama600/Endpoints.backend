const router = require("express").Router();
const {
  getAllUsers,
  addNewUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

const validateRequest = require("../../../common/validateRequest");
const { addUserSchema } = require("../joi/userValidation");

router.get("/users", getAllUsers);
router.get("/user/:id", getUser);
router.post("/addUser", validateRequest(addUserSchema), addNewUsers);
router.delete("/deleteUser/:id", deleteUser);
router.patch("/updateUser/:id", updateUser);

module.exports = router;
