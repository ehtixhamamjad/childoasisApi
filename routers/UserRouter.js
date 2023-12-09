const express = require("express");
const UserController = require("../controllers/UserController.js");
const { getData } = UserController;
const router = express.Router();

router.route("/getData").get(getData);

module.exports = router;
