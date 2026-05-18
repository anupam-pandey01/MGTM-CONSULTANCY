import React from "react";
import "./career.css";
import CareerCard from "./CareerCard";


const CareerCoaching = () => {
  return (
    <div className="career-container">

      {/* SECTION 1 */}
      <section className="career-section">
        <h2>Class 8-9 Stream & Subject Selection</h2>
        <p>
          Advanced assessment & personalised guidance to help you select the perfect stream.
        </p>

        <div className="card-grid">
          <CareerCard
            title="Stream Assessment + Counselling"
            pricing={{
              "1": "₹11,400",
              "3": "₹15,000"
            }}
            features={[
              "4D Stream Assessment",
              "Career Content",
              "25 Page Report",
              "Counselling Session"
            ]}
            tag="Best Selling"
          />

          <CareerCard
            title="Stream Assessment"
            price="₹2,400"
            features={[
              "4D Stream Assessment",
              "Career Content",
              "25 Page Report"
            ]}
          />

          <CareerCard
            title="Orientation Style Assessment"
            price="Free"
            features={[
              "Limited Access",
              "Workstyle Assessment",
              "Career Content"
            ]}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="career-section">
        <h2>Class 10-12 Career Selection & Planning</h2>
        <p>
          Expert guidance & 5D assessment to discover your perfect career.
        </p>

        <div className="card-grid">
          <CareerCard
            title="Career Assessment + Counselling"
            pricing={{
              "1": "₹11,400",
              "3": "₹18,000"
            }}
            features={[
              "5D Assessment",
              "Career Report",
              "Mentor Support"
            ]}
          />

          <CareerCard
            title="Career Assessment"
            price="₹2,400"
            features={[
              "5D Assessment",
              "Career Content",
              "Detailed Report"
            ]}
          />

          <CareerCard
            title="Orientation Assessment"
            price="Free"
            features={[
              "Basic Assessment",
              "Career Insights"
            ]}
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="career-section">
        <h2>College & Graduates Career Development</h2>
        <p>Customised services for your career growth.</p>

        <div className="card-grid">
          <CareerCard title="Career Assessment" price="₹2400" />
          <CareerCard title="Career Counselling" price="₹5000" />
          <CareerCard title="Resume Review" price="₹7500" />
          <CareerCard title="Interview Preparation" price="₹5000" />
          <CareerCard title="LinkedIn Profile Review" price="₹5000" />
        </div>
      </section>

    </div>
  );
};

export default CareerCoaching;