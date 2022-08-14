var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var ContactModel = require("../models/ContactModel");

router.use(express.static("public"));



router.get('/', async function(req, res) {

  /*var contacts = await ContactModel.find();
  console.log(contacts)*/
  res.render("contact.hbs");
});


//post
router.post('/', async (req, res) => {
  let newContact = new ContactModel(req.body);

  result = await newContact.save();
  console.log(result);

  res.redirect('/contact');
})

module.exports = router;
