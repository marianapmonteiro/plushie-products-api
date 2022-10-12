const { Router } = require("express");
const userController = require("../controllers/UserController");
const router = Router();

router.post("/users", userController.createUser);

router.get("/users", userController.getUsers);

router.get("/users/:user_id", userController.getUsersById);

router.delete("/:user_id", userController.deleteUser);

router.delete("/users/:user_id/:product_id", userController.deleteUserProduct);

module.exports = router;
