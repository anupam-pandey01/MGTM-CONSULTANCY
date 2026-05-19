const contactValidationSchema = require("../utils/validateSchema");
const Contact = require("../models/contact");
const Counselling = require("../models/counselling");

const saveContactData = async (req, res)=>{
    const { fullName, gender, contactNumber, email } = req.body;

    const { error } = contactValidationSchema.validate(req.body);

     if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

        try {
        const oldMail = await Contact.findOne({email});
        const oldMobile = await Contact.findOne({contactNumber});

        if (oldMobile || oldMail){
            return res.status(400).json({
                success: false, 
                message: "You're in our database. We'll contact you within 24 hrs",
            })
        }

        const contact = new Contact(req.body);
        await contact.save();

        res.status(201).json({
            success: true,
            message: "Our team will contact you with in 24 hrs",
            data: contact
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }

}

const saveBookingData = async (req, res)=>{
    const { fullName, gender, contactNumber, email } = req.body;

    const { error } = contactValidationSchema.validate(req.body);

     if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

        try {
        const oldMail = await Counselling.findOne({email});
        const oldMobile = await Counselling.findOne({contactNumber});

        if (oldMobile || oldMail){
            return res.status(400).json({
                success: false, 
                message: "You're in our database. We'll contact you within 24 hrs",
            })
        }

        const counselling = new Counselling(req.body);
        await counselling.save();

        res.status(201).json({
            success: true,
            message: "Our team will contact you with in 24 hrs",
            data: counselling
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = {
    saveContactData,
    saveBookingData,
}