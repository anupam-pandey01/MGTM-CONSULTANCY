import React from 'react'
import "./Fqa.css"

const Fqa = () => {
  return (
    <section class="faq-section">

    <div class="container">

      <div class="section-header">

        <p class="section-tag">
          Resources
        </p>

        <h2 class="section-title">
          Frequently Asked <span>Questions</span>
        </h2>

        <p class="section-desc">
          Find answers to the most common questions related to
          MGTM programs, career guidance, study abroad opportunities,
          and student support services.
        </p>

      </div>


      <div class="faq-wrapper">


        <div class="faq-item">

          <input type="checkbox" id="faq1" class="faq-toggle"/>

          <label for="faq1" class="faq-question">

            What services does MGTM provide?

            <span class="faq-icon">+</span>

          </label>

          <div class="faq-answer">

            <p>
              MGTM provides career counseling, study abroad guidance,
              liberal arts programs, skill development workshops,
              and personalized mentoring for students.
            </p>

          </div>

        </div>


        <div class="faq-item">

          <input type="checkbox" id="faq2" class="faq-toggle"/>

          <label for="faq2" class="faq-question">

            Does MGTM help with international admissions?

            <span class="faq-icon">+</span>

          </label>

          <div class="faq-answer">

            <p>
              Yes, MGTM helps students with university shortlisting,
              applications, scholarship guidance, visa support,
              and admission counseling for global universities.
            </p>

          </div>

        </div>

        <div class="faq-item">

          <input type="checkbox" id="faq3" class="faq-toggle"/>

          <label for="faq3" class="faq-question">

            Are the counseling sessions personalized?

            <span class="faq-icon">+</span>

          </label>

          <div class="faq-answer">

            <p>
              Yes, all counseling sessions are personalized according
              to the student’s interests, academic background,
              career goals, and future aspirations.
            </p>

          </div>

        </div>

        <div class="faq-item">

          <input type="checkbox" id="faq4" class="faq-toggle"/>

          <label for="faq4" class="faq-question">

            Can schools and colleges partner with MGTM?

            <span class="faq-icon">+</span>

          </label>

          <div class="faq-answer">

            <p>
              Absolutely. MGTM collaborates with schools and colleges
              to conduct workshops, career guidance programs,
              leadership training, and international exposure activities.
            </p>

          </div>

        </div>

        <div class="faq-item">

          <input type="checkbox" id="faq5" class="faq-toggle"/>

          <label for="faq5" class="faq-question">

            How can I contact MGTM?

            <span class="faq-icon">+</span>

          </label>

          <div class="faq-answer">

            <p>
              You can contact MGTM through the website contact form,
              email support, or directly connect with the counseling team
              for assistance and guidance.
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  )
}

export default Fqa