const mongoose = require("mongoose");
const { Schema }  = require("mongoose");

const joinSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    joinAs:{
        type: String,
        required: true,
        enum:{
            values: ["College", "School", "Others"],
            message: `{VALUE} is not a valid organization`
        } 
    },
    contactNumber:{
        type: String,
        unique: true,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    }
});

const Join = mongoose.model("Join", joinSchema);
module.exports = Join;