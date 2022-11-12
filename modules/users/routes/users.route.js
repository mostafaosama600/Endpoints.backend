const router = require("express").Router();
const {
  getAllUsers,
  addNewUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

router.get("/users", getAllUsers);
// getting spescefice users
router.get("/user/:id", getUser);
router.post("/addUser", addNewUsers);
// getting delete users done
router.delete("/deleteUser/:id", deleteUser);
// getting update users done
router.patch("/updateUser/:id", updateUser);

module.exports = router;
