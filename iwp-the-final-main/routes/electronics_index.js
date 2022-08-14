var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var ElectronicsModel = require("../models/ElectronicsModel");

router.use(express.static("public"));


// GET Electric Cars
router.get('/', async function(req, res) {

  let electronics_models = await ElectronicsModel.find();
  res.render("electronics_index.hbs", {
    models: electronics_models
  });
});





// GET Booked Model
router.get('/booknow/:id', async function(req, res) {

  let modelid = req.params.id;
  console.log(modelid);

  let booked_model = await ElectronicsModel.findById(modelid);
  //console.log(booked_model);
  res.render("electronicsbooking.hbs", {
    model: booked_model
  });

});



module.exports = router;
