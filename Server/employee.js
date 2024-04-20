const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  pass: String,
  cpass: String,
});

const EmployeeModel = mongoose.model("employee",EmployeeSchema)

module.exports = EmployeeModel