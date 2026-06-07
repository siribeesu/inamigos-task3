'use client';

import { useState } from 'react';

export default function Volunteer() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/volunteer', {
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
        .benefit-card {
            padding: 2rem;
            text-align: center;
        }
        .benefit-card i {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: 1rem;
        }
      `}} />

      {/* Page Header */}
      <div className="page-header" style={{ background: "linear-gradient(135deg, rgba(39, 174, 96, 0.9), rgba(15, 76, 129, 0.9)), url('https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg') center/cover" }}>
          <div className="container">
              <h1 className="fade-in-up">Volunteer With Us</h1>
              <p className="fade-in-up stagger-1">Your time and skills can change lives. Join our community of changemakers.</p>
          </div>
      </div>

      {/* Why Volunteer Section */}
      <section className="section">
          <div className="container">
              <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Make An Impact</span>
                  <h2 className="section-title">Why Volunteer?</h2>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Volunteering is not just about helping others; it's about growing as an individual and building a community based on empathy.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                  <div className="glass-card benefit-card" data-aos="fade-up" data-aos-delay="0">
                      <i className="fa-solid fa-earth-asia"></i>
                      <h3>Real Change</h3>
                      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>See the direct impact of your efforts on the ground, whether it's educating a child or planting trees.</p>
                  </div>
                  <div className="glass-card benefit-card" data-aos="fade-up" data-aos-delay="100">
                      <i className="fa-solid fa-people-group"></i>
                      <h3>Network</h3>
                      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Connect with like-minded individuals, social workers, and mentors from diverse backgrounds.</p>
                  </div>
                  <div className="glass-card benefit-card" data-aos="fade-up" data-aos-delay="200">
                      <i className="fa-solid fa-certificate"></i>
                      <h3>Certification</h3>
                      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Receive an official Volunteer Certificate from an ISO & 80G certified NGO recognizing your contribution.</p>
                  </div>
                  <div className="glass-card benefit-card" data-aos="fade-up" data-aos-delay="300">
                      <i className="fa-solid fa-seedling"></i>
                      <h3>Personal Growth</h3>
                      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Develop leadership, communication, and problem-solving skills in real-world scenarios.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Registration Form */}
      <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
              <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Take The First Step</span>
                  <h2 className="section-title">Volunteer Registration</h2>
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
                              <label className="form-label" htmlFor="age">Age *</label>
                              <input type="number" id="age" name="age" className="form-control" required placeholder="e.g., 22" min="16" />
                          </div>
                      </div>

                      <div className="grid-2">
                          <div className="form-group">
                              <label className="form-label" htmlFor="city">City / State *</label>
                              <input type="text" id="city" name="city" className="form-control" required placeholder="e.g., Bilaspur, CG" />
                          </div>
                          <div className="form-group">
                              <label className="form-label" htmlFor="availability">Availability *</label>
                              <select id="availability" name="availability" className="form-control" required defaultValue="">
                                  <option value="" disabled>Select Availability</option>
                                  <option value="weekends">Weekends Only</option>
                                  <option value="weekdays">Weekdays</option>
                                  <option value="flexible">Flexible / Anytime</option>
                              </select>
                          </div>
                      </div>

                      <div className="form-group">
                          <label className="form-label" htmlFor="skills">Key Skills (How can you contribute?)</label>
                          <input type="text" id="skills" name="skills" className="form-control" placeholder="e.g., Teaching, Graphic Design, Event Management" />
                      </div>

                      <div className="form-group">
                          <label className="form-label" htmlFor="message">Why do you want to volunteer? (Optional)</label>
                          <textarea id="message" name="message" className="form-control" placeholder="Tell us a bit about your motivation..."></textarea>
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
