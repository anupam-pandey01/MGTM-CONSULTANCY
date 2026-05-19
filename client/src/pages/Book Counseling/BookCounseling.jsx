import React, { useState } from 'react'
import "../ContactUs/ContactUs.css"
import { bookConselling } from '../../api/bookConselling';
import { handleError, handleSuccess } from '../../utils/handler';

const BookCounseling = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        contactNumber: "",
        email: ""
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    async function handleForm(e) {
    
        e.preventDefault();
    
        try {
    
            const { success, message } = await bookConselling(formData);
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
        <div class="contact-form-box">

            <h2>Book Counselling</h2>

            <p>
            Fill out the form and our team will contact you soon.
            </p>

            <form onSubmit={handleForm}>
            <div class="form-group">
                <label>Full Name</label>

                <input
                type="text"
                name='fullName'
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
                />
            </div>


            <div class="form-group">
                <label>Gender</label>

                <select name='gender' onChange={handleChange} value={formData.gender} required>

                <option value="">
                    Select Gender
                </option>

                <option value="male">
                    Male
                </option>

                <option value="female">
                    Female
                </option>

                <option value="other">
                    Other
                </option>

                </select>
            </div>

            <div class="form-group">
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


            <div class="form-group">
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


            <button type="submit" class="submit-btn">
                Submit
            </button>

            </form>

        </div>
    </div>
  )
}


export default BookCounseling