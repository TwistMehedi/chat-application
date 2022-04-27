const express = require("express")
 const {getLogin} = require("../controller/loginController")
 const decorateHtmlRes= require("../middlewares/common/decorateHtmlRes");

const router = express.Router();

router.get("/",decorateHtmlRes("login"), getLogin)

module.exports = router;