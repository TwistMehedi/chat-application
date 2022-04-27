const express = require("express");

const {getInbox} = require("../controller/inboxController");

const decorateHtmlRes = require("../middlewares/common/decorateHtmlRes");

const router = express.Router();

router.get("/inbox", decorateHtmlRes("inbox"), getInbox);

module.exports = router;