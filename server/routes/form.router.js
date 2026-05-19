const formRouter = require("express").Router();
const { saveContactData } = require("../controllers/formController")

formRouter.post("/contact", saveContactData);


module.exports = formRouter