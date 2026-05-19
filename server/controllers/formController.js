const contactValidationSchema = require("../utils/vallidateSchema");
const Contact = require("../models/contact")

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
        const oldemail = await Contact.findOne({email});
        const oldMobile = await Contact.findOne({contactNumber});

        if (oldMobile, oldemail){
            return res.status(400).json({
                success: false, 
                message: "You are in our Database. We will connect with you in 24 hrs",
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
    
}

module.exports = {
    saveContactData
}