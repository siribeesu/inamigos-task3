'use client';

import { useState } from 'react';

export default function Internship() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .form-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-main);
            font-weight: 500;
        }
        .form-control {
            width: 100%;
            padding: 1rem;
            border: 1px solid var(--border-color);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.5);
            color: var(--text-main);
            font-family: var(--font-main);
            font-size: 1rem;
            transition: var(--transition);
        }
        [data-theme="dark"] .form-control {
            background: rgba(0, 0, 0, 0.2);
            color: var(--text-main);
        }
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.1);
        }
        textarea.form-control {
            resize: vertical;
            min-height: 120px;
        }
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        @media (max-width: 768px) {
            .grid-2 { grid-template-columns: 1fr; gap: 0; }
        }
        .dept-card {
            padding: 2rem;
            text-align: center;
            border-left: 4px solid var(--primary);
        }
        .dept-card i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
      `}} />

      {/* Page Header */}
      <div className="page-header" style={{ background: "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(44, 62, 80, 0.9)), url('https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg') center/cover" }}>
          <div className="container">
              <h1 className="fade-in-up">Internship Program</h1>
              <p className="fade-in-up stagger-1">Kickstart your career with purpose. Learn, grow, and contribute to society.</p>
          </div>
      </div>

      {/* Departments */}
      <section className="section">
          <div className="container">
              <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Explore Roles</span>
                  <h2 className="section-title">Open Departments</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="0">
                      <i className="fa-solid fa-pen-nib"></i>
                      <h3>Content Writing</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="100" style={{ borderLeftColor: 'var(--secondary)' }}>
                      <i className="fa-solid fa-bullhorn"></i>
                      <h3>Digital Marketing</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="200" style={{ borderLeftColor: 'var(--accent)' }}>
                      <i className="fa-solid fa-users-gear"></i>
                      <h3>Human Resources</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="300" style={{ borderLeftColor: '#E84393' }}>
                      <i className="fa-solid fa-magnifying-glass-chart"></i>
                      <h3>Research</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="400" style={{ borderLeftColor: '#00CEC9' }}>
                      <i className="fa-solid fa-chart-line"></i>
                      <h3>Finance</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="500" style={{ borderLeftColor: '#6C5CE7' }}>
                      <i className="fa-solid fa-object-group"></i>
                      <h3>Graphic Design</h3>
                  </div>
                  <div className="glass-card dept-card" data-aos="zoom-in" data-aos-delay="600" style={{ borderLeftColor: '#FD79A8' }}>
                      <i className="fa-solid fa-laptop-code"></i>
                      <h3>Web Development</h3>
                  </div>
              </div>
          </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div data-aos="fade-right">
                  <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" alt="Interns working" style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
              </div>
              <div data-aos="fade-left">
                  <span className="section-subtitle">Why Join Us</span>
                  <h2 className="section-title">Internship Benefits</h2>
                  
                  <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}></i>
                          <div>
                              <h4 style={{ margin: 0 }}>Certificate of Completion</h4>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ISO & 80G Certified verifiable certificate.</p>
                          </div>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}></i>
                          <div>
                              <h4 style={{ margin: 0 }}>Letter of Recommendation</h4>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For outstanding performance during the tenure.</p>
                          </div>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}></i>
                          <div>
                              <h4 style={{ margin: 0 }}>Skill Development</h4>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Hands-on training, live projects, and mentorship.</p>
                          </div>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}></i>
                          <div>
                              <h4 style={{ margin: 0 }}>Networking Opportunities</h4>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Connect with industry professionals and youth leaders.</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Application Form */}
      <section className="section">
          <div className="container">
              <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Apply Now</span>
                  <h2 className="section-title">Application Form</h2>
              </div>

              <div className="glass form-container" data-aos="fade-up" data-aos-delay="100">
                  {formStatus === 'success' && (
                    <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '10px', marginBottom: '1.5rem' }}>
                      Application submitted successfully! We will contact you soon.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '10px', marginBottom: '1.5rem' }}>
                      Failed to submit application. Please try again later.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                      <div className="grid-2">
                          <div className="form-group">
                              <label className="form-label" htmlFor="fullName">Full Name *</label>
                              <input type="text" id="fullName" name="fullName" className="form-control" required placeholder="John Doe" />
                          </div>
                          <div className="form-group">
                              <label className="form-label" htmlFor="email">Email Address *</label>
                              <input type="email" id="email" name="email" className="form-control" required placeholder="john@example.com" />
                          </div>
                      </div>
                      
                      <div className="grid-2">
                          <div className="form-group">
                              <label className="form-label" htmlFor="phone">Phone Number *</label>
                              <input type="tel" id="phone" name="phone" className="form-control" required placeholder="+91 XXXXX XXXXX" />
                          </div>
                          <div className="form-group">
                              <label className="form-label" htmlFor="education">Highest Qualification *</label>
                              <input type="text" id="education" name="education" className="form-control" required placeholder="e.g., B.Tech / BBA" />
                          </div>
                      </div>

                      <div className="grid-2">
                          <div className="form-group">
                              <label className="form-label" htmlFor="department">Preferred Department *</label>
                              <select id="department" name="department" className="form-control" required defaultValue="">
                                  <option value="" disabled>Select Department</option>
                                  <option value="content">Content Writing</option>
                                  <option value="marketing">Digital Marketing</option>
                                  <option value="hr">Human Resources</option>
                                  <option value="research">Research</option>
                                  <option value="finance">Finance</option>
                                  <option value="design">Graphic Design</option>
                                  <option value="web">Web Development</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label className="form-label" htmlFor="duration">Internship Duration *</label>
                              <select id="duration" name="duration" className="form-control" required defaultValue="">
                                  <option value="" disabled>Select Duration</option>
                                  <option value="1">1 Month</option>
                                  <option value="2">2 Months</option>
                                  <option value="3">3 Months</option>
                                  <option value="6">6 Months</option>
                              </select>
                          </div>
                      </div>

                      <div className="form-group">
                          <label className="form-label" htmlFor="portfolio">Portfolio / LinkedIn URL</label>
                          <input type="url" id="portfolio" name="portfolio" className="form-control" placeholder="https://..." />
                      </div>

                      <div className="form-group">
                          <label className="form-label" htmlFor="message">Why should we hire you? *</label>
                          <textarea id="message" name="message" className="form-control" required placeholder="Briefly describe your skills and motivation..."></textarea>
                      </div>

                      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                          <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }} disabled={formStatus === 'submitting'}>
                              {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    </>
  );
}
