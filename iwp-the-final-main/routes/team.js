var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


router.use(express.static("public"));



router.get('/', async function(req, res) {


  res.render("team.hbs");
});



module.exports = router;
