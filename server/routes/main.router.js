const express = require("express");
const formRouter = require("./form.router");
const adminRouter = require("./admin.router");
const mainRouter = express.Router();

mainRouter.use(formRouter);
mainRouter.use(adminRouter);

mainRouter.get("/", (req, res)=>{
    res.send("Route is working");
})

module.exports = mainRouter;

