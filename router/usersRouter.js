const express = require("express");
const {getUsers} = require("../controller/usersController");
const decorateHtmlRes= require("../middlewares/common/decorateHtmlRes");

const router = express.Router();

router.get("/",decorateHtmlRes("users"),getUsers);

module.exports=router;