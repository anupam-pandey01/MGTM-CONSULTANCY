const express = require("express");
const formRouter = require("./form.router");
const mainRouter = express.Router();

mainRouter.use(formRouter)

mainRouter.get("/", (req, res)=>{
    res.send("Route is working");
})

module.exports = mainRouter;

