const mongoose = require("mongoose");
const { Schema }  = require("mongoose");

const counsellingSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum:{
            values: ["male", "female", "others"],
            message: `{VALUE} is not a valid gender`
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
    },
    duplicateCount: {
        type: Number,
        default: 0
    }
});

const Counselling = mongoose.model("Counselling", counsellingSchema);
module.exports = Counselling;