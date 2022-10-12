const { Router } = require("express");
const LoginController = require("../controllers/Login");
const router = Router();

router.post("/login", LoginController.createSession);

module.exports = router;
