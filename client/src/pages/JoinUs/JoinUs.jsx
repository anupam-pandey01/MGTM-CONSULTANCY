import React from 'react'
import "../ContactUs/ContactUs.css"

const JoinUs = () => {
  return (
    <div className='contact-us'>
        <div class="contact-form-box">

            <h2>Join MGMT</h2>

            <p>
            Fill out the form and our team will contact you soon.
            </p>

            <form>
            <div class="form-group">
                <label>Organization Name</label>

                <input
                type="text"
                placeholder="Enter your organization name"
                required
                />
            </div>


            <div class="form-group">
                <label>Join As</label>

                <select required>

                <option value="">
                    Select Organization
                </option>

                <option value="Male">
                    College
                </option>

                <option value="Female">
                    School
                </option>

                <option value="Other">
                    Other
                </option>

                </select>
            </div>

            <div class="form-group">
                <label>Contact Number</label>

                <input
                type="tel"
                placeholder="Enter your contact number"
                required
                />
            </div>


            <div class="form-group">
                <label>Email ID</label>

                <input
                type="email"
                placeholder="Enter your email address"
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


export default JoinUs