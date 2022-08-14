var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var ServiceModel = require("../models/ServiceModel");

router.use(express.static("public"));


// GET Electric Cars
router.get('/', async function (req, res) {
    var services = await ServiceModel.find();
    console.log(services)
    
    res.render("service.hbs");
});


//post
router.post('/', async (req, res)=> {
    let newService = new ServiceModel(req.body);

    result = await newService.save();
    console.log(result);

    res.redirect('/services');
})

module.exports = router;
