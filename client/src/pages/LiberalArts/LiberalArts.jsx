import React from "react";
import "./liberalArts.css";
import { Link } from "react-router";
import { Calendar1, Laptop, Presentation } from 'lucide-react';
import { BookOpenText } from 'lucide-react';

const LiberalArts = () => {
  return (
    <div className="liberal-container">

      {/* HERO */}
      <section className="liberal-hero">
        <h1>Liberal Arts Program</h1>
        <p>
          Explore multiple disciplines, discover your interests, and build a
          flexible career path with our expert guidance.
        </p>
        <Link to={`/contact-us`}><button className="primary-btn">Book Free Consultation</button></Link>
      </section>

      {/* ABOUT */}
      <section className="liberal-section">
        <h2>What is Liberal Arts?</h2>
        <p>
          Liberal Arts is a multidisciplinary approach that allows students to
          explore subjects across humanities, sciences, and social sciences
          before choosing a specialization.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="liberal-section">
        <h2>Why Choose Liberal Arts?</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Flexible Curriculum</h3>
            <p>Study multiple subjects before deciding your major.</p>
          </div>

          <div className="card">
            <h3>Career Versatility</h3>
            <p>Opens doors to diverse career paths.</p>
          </div>

          <div className="card">
            <h3>Skill Development</h3>
            <p>Critical thinking, communication, and creativity.</p>
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="liberal-section">
        <h2>Program Structure</h2>

        <div className="grid-2">
          <div className="card">
                <Calendar1 size={40}/>
                <h3>Year 1</h3>
            <p>Foundation courses across disciplines</p>
          </div>

          <div className="card">
            <BookOpenText size={40}/>
            <h3>Year 2</h3>
            <p>Explore majors and minors things</p>
          </div>

          <div className="card">
            <Presentation size={40}/>
            <h3>Year 3</h3>
            <p>Specialization + projects</p>
          </div>

          <div className="card">
            <Laptop size={40}/>
            <h3>Year 4</h3>
            <p>Internships + research work</p>
          </div>
        </div>
      </section>

      {/* TOP CAREERS */}
      <section className="liberal-section">
        <h2>Career Opportunities</h2>

        <div className="grid-3">
          <div className="card">Psychologist</div>
          <div className="card">Journalist</div>
          <div className="card">Data Analyst</div>
          <div className="card">UX Designer</div>
          <div className="card">Policy Maker</div>
          <div className="card">Entrepreneur</div>
        </div>
      </section>

      {/* CTA */}
      <section className="liberal-cta">
        <h2>Not sure if Liberal Arts is right for you?</h2>
        <p>Talk to our expert career counsellors today.</p>
        <Link to={`/contact-us`}><button className="primary-btn">Get Guidance</button></Link>
      </section>

    </div>
  );
};

export default LiberalArts;