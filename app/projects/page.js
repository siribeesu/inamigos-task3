import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .project-section {
            padding: 6rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        .project-section:nth-child(even) {
            background-color: var(--surface);
        }
        .project-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .project-section:nth-child(even) .project-grid {
            direction: rtl;
        }
        .project-section:nth-child(even) .project-grid > * {
            direction: ltr;
        }
        .project-stats {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-color);
        }
        .stat-item {
            text-align: center;
        }
        .stat-item h4 {
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 0.2rem;
        }
        .stat-item p {
            color: var(--text-muted);
            font-size: 0.9rem;
            font-weight: 600;
        }
        .project-gallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 2rem;
        }
        .project-gallery img {
            border-radius: 10px;
            height: 150px;
            width: 100%;
            object-fit: cover;
            box-shadow: var(--shadow-sm);
        }
        @media screen and (max-width: 992px) {
            .project-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            .project-section:nth-child(even) .project-grid {
                direction: ltr;
            }
        }
      `}} />

      {/* Page Header */}
      <div className="page-header">
          <div className="container">
              <h1 className="fade-in-up">Our Projects</h1>
              <p className="fade-in-up stagger-1">Discover the initiatives driving our mission for a better, sustainable tomorrow.</p>
          </div>
      </div>

      {/* Project SEVA */}
      <section className="project-section" id="seva">
          <div className="container project-grid">
              <div data-aos="fade-right">
                  <span className="section-subtitle" style={{ color: 'var(--primary)' }}>Community Support</span>
                  <h2 className="section-title">Project SEVA</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Project SEVA is our flagship community support initiative dedicated to providing essential resources like food, clothing, and hygiene kits to the underprivileged segments of society, especially during times of crisis and harsh winters.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Conduct regular food and ration distribution drives.</li>
                      <li>Organize winter blanket and cloth donation camps.</li>
                      <li>Provide rapid relief during natural disasters or emergencies.</li>
                  </ul>

                  <div className="project-stats">
                      <div className="stat-item">
                          <h4>15,000+</h4>
                          <p>Lives Impacted</p>
                      </div>
                      <div className="stat-item">
                          <h4>50+</h4>
                          <p>Distribution Drives</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-left">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg" alt="Project SEVA Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
                  <div className="project-gallery">
                      <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" alt="Gallery" />
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" alt="Gallery" />
                  </div>
              </div>
          </div>
      </section>

      {/* Project BACHPANSHALA */}
      <section className="project-section" id="bachpanshala">
          <div className="container project-grid">
              <div data-aos="fade-left">
                  <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Education</span>
                  <h2 className="section-title">Project BACHPANSHALA</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Education is the fundamental right of every child. BACHPANSHALA aims to bridge the educational divide by bringing basic literacy, numeracy, and life skills to children in slums and marginalized communities.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Set up informal learning centers in urban slums.</li>
                      <li>Distribute free stationery, books, and educational kits.</li>
                      <li>Provide mentorship and career guidance to youth.</li>
                  </ul>

                  <div className="project-stats">
                      <div className="stat-item">
                          <h4>5,000+</h4>
                          <p>Children Enrolled</p>
                      </div>
                      <div className="stat-item">
                          <h4>20+</h4>
                          <p>Learning Centers</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-right">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" alt="Project BACHPANSHALA Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
                  <div className="project-gallery">
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg" alt="Gallery" />
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg" alt="Gallery" />
                  </div>
              </div>
          </div>
      </section>

      {/* Project JEEV */}
      <section className="project-section" id="jeev">
          <div className="container project-grid">
              <div data-aos="fade-right">
                  <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Animal Welfare</span>
                  <h2 className="section-title">Project JEEV</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>We believe every life matters. Project JEEV focuses on the rescue, rehabilitation, and feeding of stray and injured animals, ensuring they receive the care and compassion they deserve.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Conduct daily stray feeding drives across cities.</li>
                      <li>Provide urgent medical care and vaccinations to injured strays.</li>
                      <li>Promote animal adoption and cruelty awareness.</li>
                  </ul>

                  <div className="project-stats">
                      <div className="stat-item">
                          <h4>8,000+</h4>
                          <p>Animals Fed</p>
                      </div>
                      <div className="stat-item">
                          <h4>500+</h4>
                          <p>Rescues & Treatments</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-left">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg" alt="Project JEEV Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
                  <div className="project-gallery">
                      <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg" alt="Gallery" />
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" alt="Gallery" />
                  </div>
              </div>
          </div>
      </section>

      {/* Project PRAKRITI */}
      <section className="project-section" id="prakriti">
          <div className="container project-grid">
              <div data-aos="fade-left">
                  <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Environment</span>
                  <h2 className="section-title">Project PRAKRITI</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Dedicated to environmental conservation, Project PRAKRITI tackles climate change at the grassroots level through extensive afforestation and waste management campaigns.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Organize large-scale tree plantation and maintenance drives.</li>
                      <li>Conduct cleanliness drives in public spaces and water bodies.</li>
                      <li>Raise awareness about sustainable living and plastic reduction.</li>
                  </ul>

                  <div className="project-stats">
                      <div className="stat-item">
                          <h4>20,000+</h4>
                          <p>Trees Planted</p>
                      </div>
                      <div className="stat-item">
                          <h4>30+</h4>
                          <p>Cleanliness Drives</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-right">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg" alt="Project PRAKRITI Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
                  <div className="project-gallery">
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg" alt="Gallery" />
                      <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg" alt="Gallery" />
                  </div>
              </div>
          </div>
      </section>

      {/* Project UDAAN */}
      <section className="project-section" id="udaan">
          <div className="container project-grid">
              <div data-aos="fade-right">
                  <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Women Empowerment</span>
                  <h2 className="section-title">Project UDAAN</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Project UDAAN is focused on women empowerment through skill development, financial independence, and promoting equal opportunities for women in both rural and urban areas.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Conduct vocational training and skill workshops.</li>
                      <li>Spread awareness about women's rights and hygiene.</li>
                      <li>Assist in setting up micro-enterprises and self-help groups.</li>
                  </ul>
              </div>
              <div data-aos="fade-left">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg" alt="Project UDAAN Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
              </div>
          </div>
      </section>

      {/* Project VIKAS */}
      <section className="project-section" id="vikas">
          <div className="container project-grid">
              <div data-aos="fade-left">
                  <span className="section-subtitle" style={{ color: 'var(--primary)' }}>Skill Development</span>
                  <h2 className="section-title">Project VIKAS</h2>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Project VIKAS aims at enhancing employability through comprehensive skill development programs, bridging the gap between education and industry requirements for the youth.</p>
                  
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Objectives</h4>
                  <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      <li>Provide technical and soft skills training to young adults.</li>
                      <li>Partner with industries for practical exposure.</li>
                      <li>Facilitate job placements and career mentoring.</li>
                  </ul>
              </div>
              <div data-aos="fade-right">
                  <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" alt="Project VIKAS Banner" style={{ borderRadius: '20px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
              </div>
          </div>
      </section>
      
      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
              <h2 className="section-title">Be A Part Of Our Projects</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>Whether you want to teach, plant trees, or help animals, we have a project that needs your dedication.</p>
              <Link href="/volunteer" className="btn btn-primary">Volunteer With Us</Link>
          </div>
      </section>
    </>
  );
}
