import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <section class="blog-section">

    <div class="container">

      <div class="section-header">

        <p class="section-tag">
          Resources
        </p>

        <h2 class="section-title">
          Latest <span>Blogs</span>
        </h2>

        <p class="section-desc">
          Explore career insights, study abroad opportunities,
          student success stories, and educational guidance
          through MGTM’s latest blogs and resources.
        </p>

      </div>

      <div class="blog-grid">

        <div class="blog-card">

          <div class="blog-image">

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
              alt="Study Abroad"
            />

          </div>

          <div class="blog-content">

            <span class="blog-category">
              Study Abroad
            </span>

            <h3>
              Top Countries for Higher Education in 2026
            </h3>

            <p>
              Discover the best international destinations
              for students seeking quality education,
              scholarships, and career opportunities.
            </p>

            <div class="blog-footer">

              <span class="blog-date">
                18 May 2026
              </span>

              <a href="#" class="read-more">
                Read More →
              </a>

            </div>

          </div>

        </div>


        <div class="blog-card">

          <div class="blog-image">

            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200"
              alt="Career Guidance"
            />

          </div>

          <div class="blog-content">

            <span class="blog-category">
              Career Coaching
            </span>

            <h3>
              How Career Counseling Helps Students
            </h3>

            <p>
              Learn how expert career guidance can help
              students choose the right career path
              according to their skills and interests.
            </p>

            <div class="blog-footer">

              <span class="blog-date">
                10 May 2026
              </span>

              <a href="#" class="read-more">
                Read More →
              </a>

            </div>

          </div>

        </div>

        <div class="blog-card">

          <div class="blog-image">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
              alt="Liberal Arts"
            />

          </div>

          <div class="blog-content">

            <span class="blog-category">
              Liberal Arts
            </span>

            <h3>
              Why Liberal Arts Education is Growing Fast
            </h3>

            <p>
              Understand the importance of liberal arts
              programs and how they build creativity,
              leadership, and global thinking.
            </p>

            <div class="blog-footer">

              <span class="blog-date">
                02 May 2026
              </span>

              <a href="#" class="read-more">
                Read More →
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default Blog