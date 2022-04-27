// const res = require("express/lib/response");

function getLogin(req, res, next){
    res.render("index");
}

module.exports = {
    getLogin,
}