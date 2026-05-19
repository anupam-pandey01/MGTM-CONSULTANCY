const formRouter = require("express").Router();
const { saveContactData, saveBookingData } = require("../controllers/formController")

formRouter.post("/contact", saveContactData);
formRouter.post("/book-counselling", saveBookingData);

module.exports = formRouter