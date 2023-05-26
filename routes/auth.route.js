const express = require("express");
const { login, register, blogdata } = require("../controllers/Auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/blogdata", blogdata);

module.exports = router;
