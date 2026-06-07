'use client';

import { useState } from 'react';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
        @media (max-width: 992px) {
            .contact-grid { grid-template-columns: 1fr; }
        }
        .contact-info-card {
            padding: 2rem;
            margin-bottom: 2rem;
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
        }
        .contact-info-card i {
            font-size: 2rem;
            color: var(--secondary);
            background: rgba(243, 156, 18, 0.1);
            padding: 1rem;
            border-radius: 50%;
        }
        
        .form-group { margin-bottom: 1.5rem; }
        .form-control {
            width: 100%;
            padding: 1rem;
            border: 1px solid var(--border-color);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.5);
            color: var(--text-main);
            font-family: var(--font-main);
        }
        [data-theme="dark"] .form-control { background: rgba(0,0,0,0.2); }
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.1);
        }

        /* FAQ */
        .faq-item {
            margin-bottom: 1rem;
            border: 1px solid var(--border-color);
            border-radius: 10px;
            overflow: hidden;
            background: var(--surface);
        }
        .faq-question {
            padding: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: var(--primary);
            transition: var(--transition);
        }
        .faq-question:hover { background: rgba(15, 76, 129, 0.05); }
        .faq-answer {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
            color: var(--text-muted);
        }
        .faq-item.active .faq-answer {
            padding: 0 1.5rem 1.5rem;
            max-height: 500px;
        }
        .faq-item.active .faq-question i {
            transform: rotate(180deg);
        }
      `}} />

      {/* Page Header */}
      <div className="page-header" style={{ background: "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(44, 62, 80, 0.9)), url('https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg') center/cover" }}>
          <div className="container">
              <h1 className="fade-in-up">Contact Us</h1>
              <p className="fade-in-up stagger-1">Have questions or want to collaborate? We'd love to hear from you.</p>
          </div>
      </div>

      {/* Contact Section */}
      <section className="section">
          <div className="container contact-grid">
              
              {/* Info & Map */}
              <div data-aos="fade-right">
                  <div className="glass-card contact-info-card">
                      <i className="fa-solid fa-location-dot"></i>
                      <div>
                          <h3 style={{ marginBottom: '0.5rem' }}>Head Office</h3>
                          <p style={{ color: 'var(--text-muted)' }}>Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br/>Bilaspur, Chhattisgarh 495555</p>
                      </div>
                  </div>
                  
                  <div className="glass-card contact-info-card">
                      <i className="fa-solid fa-envelope"></i>
                      <div>
                          <h3 style={{ marginBottom: '0.5rem' }}>Email Us</h3>
                          <p style={{ color: 'var(--text-muted)' }}><a href="mailto:inamigosfoundation@gmail.com" style={{ color: 'inherit' }}>inamigosfoundation@gmail.com</a></p>
                      </div>
                  </div>
                  
                  <div className="glass-card contact-info-card">
                      <i className="fa-solid fa-phone"></i>
                      <div>
                          <h3 style={{ marginBottom: '0.5rem' }}>Call Us</h3>
                          <p style={{ color: 'var(--text-muted)' }}>+91 626 730 9902</p>
                      </div>
                  </div>

                  <div className="glass-card" style={{ padding: '1rem', marginTop: '2rem' }}>
                      {/* Embedded Google Map */}
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118949.11718870199!2d82.07221237190011!3d22.09117135878438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b6b66850bbd%3A0xc07c975a5eefbdfb!2sBilaspur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>

              {/* Form */}
              <div data-aos="fade-left">
                  <div className="glass" style={{ padding: '3rem' }}>
                      <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Send us a Message</h2>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Fill out the form below and our team will get back to you within 24-48 hours.</p>
                      
                      {formStatus === 'success' && (
                        <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '10px', marginBottom: '1.5rem' }}>
                          Message sent successfully! We will get back to you soon.
                        </div>
                      )}
                      
                      {formStatus === 'error' && (
                        <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '10px', marginBottom: '1.5rem' }}>
                          Failed to send message. Please try again later.
                        </div>
                      )}

                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <input type="text" name="name" className="form-control" placeholder="Your Full Name *" required />
                          </div>
                          <div className="form-group">
                              <input type="email" name="email" className="form-control" placeholder="Your Email Address *" required />
                          </div>
                          <div className="form-group">
                              <input type="tel" name="phone" className="form-control" placeholder="Phone Number" />
                          </div>
                          <div className="form-group">
                              <select name="subject" className="form-control" required defaultValue="">
                                  <option value="" disabled>Select Subject *</option>
                                  <option value="general">General Inquiry</option>
                                  <option value="donation">Donation Queries</option>
                                  <option value="partnership">Corporate Partnership (CSR)</option>
                                  <option value="volunteer">Volunteer/Internship</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <textarea name="message" className="form-control" placeholder="Your Message *" required style={{ minHeight: '150px', resize: 'vertical' }}></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={formStatus === 'submitting'}>
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                          </button>
                      </form>
                  </div>
              </div>
              
          </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
              <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Common Queries</span>
                  <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
              
              <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                  <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                      <div className="faq-question" onClick={() => toggleFaq(0)}>
                          <span>Is InAmigos Foundation a registered NGO?</span>
                          <i className="fa-solid fa-chevron-down transition"></i>
                      </div>
                      <div className="faq-answer">
                          <p>Yes, InAmigos Foundation is a registered Section 8 organization. We are also CSR-1 registered, NITI Aayog registered, and hold 80G and 12A certifications.</p>
                      </div>
                  </div>
                  
                  <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                      <div className="faq-question" onClick={() => toggleFaq(1)}>
                          <span>Are donations tax-deductible?</span>
                          <i className="fa-solid fa-chevron-down transition"></i>
                      </div>
                      <div className="faq-answer">
                          <p>Yes, since we are 80G certified, all donations made to InAmigos Foundation are eligible for tax exemption under Section 80G of the Income Tax Act.</p>
                      </div>
                  </div>
                  
                  <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
                      <div className="faq-question" onClick={() => toggleFaq(2)}>
                          <span>Do volunteers and interns receive certificates?</span>
                          <i className="fa-solid fa-chevron-down transition"></i>
                      </div>
                      <div className="faq-answer">
                          <p>Absolutely! All volunteers and interns who successfully complete their tenure receive an official, verifiable certificate, and exceptional candidates may receive a Letter of Recommendation.</p>
                      </div>
                  </div>
                  
                  <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
                      <div className="faq-question" onClick={() => toggleFaq(3)}>
                          <span>How can my company partner for CSR activities?</span>
                          <i className="fa-solid fa-chevron-down transition"></i>
                      </div>
                      <div className="faq-answer">
                          <p>You can fill out the contact form on this page and select "Corporate Partnership (CSR)" as the subject, or directly email our support team. We will arrange a meeting to discuss potential alignments.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
