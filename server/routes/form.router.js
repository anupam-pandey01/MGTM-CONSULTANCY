const formRouter = require("express").Router();
const { saveContactData, saveBookingData, saveJoinUs } = require("../controllers/formController")

formRouter.post("/contact", saveContactData);
formRouter.post("/book-counselling", saveBookingData);
formRouter.post("/join-as", saveJoinUs)

module.exports = formRouter