import React, { useState } from 'react'
import "./ContactUs.css"
import { saveContact } from '../../api/contactApi'
import { handleError, handleSuccess } from '../../utils/handler';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        contactNumber: "",
        email: ""
    });

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleForm(e) {

        e.preventDefault();

        try {

            const { success, message } = await saveContact(formData);
            if (success){
                handleSuccess(message)
            }

            setFormData({
                fullName: "",
                gender: "",
                contactNumber: "",
                email: ""
            });

        } catch (err) {
            handleError(err.message);
        }
    }

    return (
        <div className='contact-us'>

            <div className="contact-form-box">

                <h2>Contact Us</h2>

                <p>
                    Fill out the form and our team will contact you soon.
                </p>

                <form onSubmit={handleForm}>

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">

                        <label>Gender</label>

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Gender
                            </option>

                            <option value="male">
                                Male
                            </option>

                            <option value="female">
                                Female
                            </option>

                            <option value="others">
                                Others
                            </option>

                        </select>
                    </div>

                    <div className="form-group">

                        <label>Contact Number</label>

                        <input
                            type="tel"
                            name="contactNumber"
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">

                        <label>Email ID</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>

                </form>

            </div>
        </div>
    )
}

export default ContactUs