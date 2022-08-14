var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var serviceModelSchema = new Schema({
    customerImage: { type: String},
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerModel: { type: String },
    customerType: { type: String },
    customerDone: { type: String },
    customerBill: { type: String },
    Date: { type: String }
});

module.exports = mongoose.model("service", serviceModelSchema, "service");
