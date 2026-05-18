import React from 'react'
import "../ContactUs/ContactUs.css"

const BookCounseling = () => {
  return (
    <div className='contact-us'>
        <div class="contact-form-box">

            <h2>Book Counselling</h2>

            <p>
            Fill out the form and our team will contact you soon.
            </p>

            <form>
            <div class="form-group">
                <label>Full Name</label>

                <input
                type="text"
                placeholder="Enter your full name"
                required
                />
            </div>


            <div class="form-group">
                <label>Gender</label>

                <select required>

                <option value="">
                    Select Gender
                </option>

                <option value="Male">
                    Male
                </option>

                <option value="Female">
                    Female
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


export default BookCounseling