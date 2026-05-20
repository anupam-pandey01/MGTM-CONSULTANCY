import React, { useState } from 'react'
import "../ContactUs/ContactUs.css"
import { joinAs } from '../../api/joinAsApi';
import { handleError, handleSuccess } from '../../utils/handler';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        organizationName: "",
        joinAs: "",
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
            const { success, message } = await joinAs(formData);
            if (success){
                handleSuccess(message)
            }
        
            setFormData({
                organizationName: "",
                joinAs: "",
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

            <h2>Join MGMT</h2>

            <p>
            Fill out the form and our team will contact you soon.
            </p>

            <form onSubmit={handleForm}>
            <div className="form-group">
                <label>Organization Name</label>

                <input
                type="text"
                placeholder="Enter your organization name"
                required
                name='organizationName'
                value={formData.organizationName}
                onChange={handleChange}
                />
            </div>


            <div className="form-group">
                <label>Join As</label>

                <select required onChange={handleChange} name='joinAs'>

                <option >
                    Select Organization
                </option>

                <option value="college">
                    College
                </option>

                <option value="school">
                    School
                </option>

                <option value="others">
                    Other
                </option>

                </select>
            </div>

            <div className="form-group">
                <label>Contact Number</label>

                <input
                type="tel"
                placeholder="Enter your contact number"
                required
                name='contactNumber'
                value={formData.contactNumber}
                onChange={handleChange}
                />
            </div>


            <div className="form-group">
                <label>Email ID</label>

                <input
                type="email"
                placeholder="Enter your email address"
                required
                name='email'
                value={formData.email}
                onChange={handleChange}
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


export default JoinUs