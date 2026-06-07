'use client';

import { useState } from 'react';

export default function Join() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', dob: '', gender: '',
    state: '', city: '', pincode: '',
    interest: '',
    skills: '', experience: '', message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const totalSteps = 5;

  const handleNext = () => {
    // Basic validation could be added here
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
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
        .wizard-container {
            max-width: 800px;
            margin: -80px auto 4rem;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: var(--shadow-lg);
            position: relative;
            z-index: 10;
        }
        
        /* Progress Bar */
        .wizard-progress {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-bottom: 3rem;
        }
        .wizard-progress::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            height: 4px;
            background: var(--border-color);
            z-index: -1;
        }
        .progress-bar-fill {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 4px;
            background: var(--secondary);
            z-index: -1;
            transition: width 0.3s ease;
        }
        .progress-step {
            width: 40px;
            height: 40px;
            background: var(--surface);
            border: 4px solid var(--border-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--text-muted);
            transition: var(--transition);
        }
        .progress-step.active {
            border-color: var(--secondary);
            color: var(--secondary);
        }
        .progress-step.completed {
            background: var(--secondary);
            border-color: var(--secondary);
            color: #fff;
        }

        /* Form Controls */
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
            padding: 1rem 1.2rem;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            background: #ffffff;
            color: var(--text-main);
            font-size: 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        [data-theme="dark"] .form-control {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: var(--text-main);
        }
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(15, 76, 129, 0.15);
        }
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        @media (max-width: 768px) {
            .grid-2 { grid-template-columns: 1fr; gap: 0; }
        }

        /* Radio Cards for Interest */
        .interest-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        .interest-card {
            position: relative;
            cursor: pointer;
        }
        .interest-card input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        .interest-card-content {
            border: 2px solid var(--border-color);
            border-radius: 15px;
            padding: 2rem 1rem;
            text-align: center;
            transition: var(--transition);
        }
        .interest-card-content i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        .interest-card input:checked ~ .interest-card-content {
            border-color: var(--secondary);
            background: rgba(243, 156, 18, 0.1);
        }
        .interest-card input:checked ~ .interest-card-content i {
            color: var(--secondary);
        }

        /* Buttons */
        .wizard-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-color);
        }
        
        /* Review Data */
        .review-data {
            background: rgba(15, 76, 129, 0.05);
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        .review-data p {
            margin-bottom: 0.5rem;
            color: var(--text-main);
        }
        .review-data strong {
            color: var(--primary);
            display: inline-block;
            width: 150px;
        }
      `}} />

      {/* Page Header */}
      <div className="page-header" style={{ background: "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(243, 156, 18, 0.8)), url('https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg') center/cover", paddingBottom: '8rem' }}>
          <div className="container">
              <h1 className="fade-in-up">Become A Part Of The Change</h1>
              <p className="fade-in-up stagger-1">Complete this quick registration to join our mission.</p>
          </div>
      </div>

      {/* Wizard Form */}
      <section>
          <div className="container">
              <div className="glass wizard-container" data-aos="fade-up">
                  {/* Progress Bar */}
                  <div className="wizard-progress">
                      <div className="progress-bar-fill" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
                      {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`progress-step ${step >= i ? (step > i ? 'completed' : 'active') : ''}`}>
                              {i}
                          </div>
                      ))}
                  </div>

                  {formStatus === 'success' ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                      <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: 'var(--secondary)', marginBottom: '1rem' }}></i>
                      <h2>Thank You!</h2>
                      <p style={{ color: 'var(--text-muted)' }}>Your application has been submitted successfully. We will get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                        {formStatus === 'error' && (
                            <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '10px', marginBottom: '1.5rem' }}>
                            Failed to submit application. Please try again later.
                            </div>
                        )}

                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="form-step active">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Personal Information</h3>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="fullName">Full Name *</label>
                                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                                    </div>
                                </div>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="dob">Date of Birth *</label>
                                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="form-control" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Gender *</label>
                                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Address */}
                        {step === 2 && (
                            <div className="form-step active">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Address Details</h3>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="state">State *</label>
                                    <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="city">City *</label>
                                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pincode">Pincode *</label>
                                        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" required />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Interest */}
                        {step === 3 && (
                            <div className="form-step active">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>How would you like to join us? *</h3>
                                <div className="interest-cards">
                                    <label className="interest-card">
                                        <input type="radio" name="interest" value="Volunteer" checked={formData.interest === 'Volunteer'} onChange={handleChange} required />
                                        <div className="interest-card-content">
                                            <i className="fa-solid fa-handshake-angle"></i>
                                            <h4>Volunteer</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Dedicate time to on-ground activities</p>
                                        </div>
                                    </label>
                                    <label className="interest-card">
                                        <input type="radio" name="interest" value="Internship" checked={formData.interest === 'Internship'} onChange={handleChange} />
                                        <div className="interest-card-content">
                                            <i className="fa-solid fa-laptop-code"></i>
                                            <h4>Internship</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Learn and work with our departments</p>
                                        </div>
                                    </label>
                                    <label className="interest-card">
                                        <input type="radio" name="interest" value="Donation" checked={formData.interest === 'Donation'} onChange={handleChange} />
                                        <div className="interest-card-content">
                                            <i className="fa-solid fa-hand-holding-dollar"></i>
                                            <h4>Donation</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Support our causes financially</p>
                                        </div>
                                    </label>
                                    <label className="interest-card">
                                        <input type="radio" name="interest" value="Partnership" checked={formData.interest === 'Partnership'} onChange={handleChange} />
                                        <div className="interest-card-content">
                                            <i className="fa-solid fa-handshake"></i>
                                            <h4>Partnership</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Collaborate as an organization</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Additional Details */}
                        {step === 4 && (
                            <div className="form-step active">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Additional Details</h3>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="skills">Skills & Expertise</label>
                                    <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} className="form-control" placeholder="e.g., Marketing, Teaching, Coding" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="experience">Past Experience (if any)</label>
                                    <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} className="form-control" placeholder="Any previous NGO experience?" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Anything else you'd like to tell us?" style={{ minHeight: '100px', resize: 'vertical' }}></textarea>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Review */}
                        {step === 5 && (
                            <div className="form-step active">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Review & Submit</h3>
                                <div className="review-data">
                                    <p><strong>Name:</strong> <span>{formData.fullName}</span></p>
                                    <p><strong>Email:</strong> <span>{formData.email}</span></p>
                                    <p><strong>Phone:</strong> <span>{formData.phone}</span></p>
                                    <p><strong>City/State:</strong> <span>{formData.city}, {formData.state}</span></p>
                                    <p><strong>Interest:</strong> <span style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>{formData.interest}</span></p>
                                </div>
                                <div style={{ background: 'rgba(39, 174, 96, 0.1)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid var(--accent)', marginBottom: '1rem' }}>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>By clicking submit, you agree to our terms and conditions and confirm that the information provided is accurate.</p>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="wizard-buttons">
                            {step > 1 && (
                                <button type="button" className="btn btn-outline" onClick={handlePrev}>Previous</button>
                            )}
                            {step < 5 && (
                                <button type="button" className="btn btn-primary" onClick={handleNext} style={{ marginLeft: 'auto' }}>Next Step</button>
                            )}
                            {step === 5 && (
                                <button type="submit" className="btn btn-secondary" style={{ marginLeft: 'auto' }} disabled={formStatus === 'submitting'}>
                                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                </button>
                            )}
                        </div>
                    </form>
                  )}
              </div>
          </div>
      </section>
    </>
  );
}
