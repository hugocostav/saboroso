var conn = require("./../link/db");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  conn.query("SELECT * FROM tb_menus ORDER BY title", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.render("index", {
      title: "RauranteRest Saboroso!",
      menus: results,
    });
  });
});

module.exports = router;
