import React from 'react'
import "./Partnerships.css"

const Partnerships = () => {

return (
<section class="participants-section">

    <div class="container">

      <div class="section-header">

        <p class="section-tag">
          Participants
        </p>

        <h2 class="section-title">
          Schools & <span>Colleges</span>
        </h2>

        <p class="section-desc">
          MGTM collaborates with schools and colleges to provide students
          with career guidance, global education opportunities, workshops,
          and future-ready learning experiences.
        </p>

      </div>


      <div class="participants-grid">

        <div class="participant-card">

          <div class="card-icon school-icon">
            🏫
          </div>

          <h3>Schools</h3>

          <p>
            Empower students with career counseling, skill development
            programs, academic planning, and study abroad guidance.
          </p>

          <div class="feature-list">

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              Career Guidance Programs
            </div>

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              Student Workshops
            </div>

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              Global Education Awareness
            </div>

          </div>

          <a href="/join-us" class="btn-primary">
            Join as School
          </a>

        </div>

        <div class="participant-card">

          <div class="card-icon college-icon">
            🎓
          </div>

          <h3>Colleges</h3>

          <p>
            Partner with MGTM to create innovative educational opportunities,
            placement guidance, leadership development, and international exposure.
          </p>

          <div class="feature-list">

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              Placement & Career Support
            </div>

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              Industry Workshops
            </div>

            <div class="feature-item">
              <div class="feature-icon">✓</div>
              International Collaborations
            </div>

          </div>

          <a href="/join-us" class="btn-primary">
            Join as College
          </a>

        </div>

      </div>

    </div>

</section>
)
}

export default Partnerships