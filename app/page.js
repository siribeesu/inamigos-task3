import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Loading Screen - Can be implemented as a separate component or kept here */}
      <div id="loader">
        <div className="loader-content">
          <div className="spinner"></div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>InAmigos Foundation</h2>
        </div>
      </div>

      {/* Scroll Progress */}
      <div id="scrollProgress" className="scroll-progress"></div>

      {/* Hero Section */}
      <div className="hero-section" id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: "url('https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg') center/cover" }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
          <h1 className="fade-in-up" style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Uniting Minds For Change</h1>
          <p className="fade-in-up stagger-1" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.9 }}>We are a youth-led organization empowering communities, protecting the environment, and building a brighter future for all.</p>
          <div className="hero-btns fade-in-up stagger-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/join" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Be The Change</Link>
            <Link href="/projects" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Our Work</Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="float-anim" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', color: 'white', textAlign: 'center', zIndex: 2 }}>
          <span style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="glass" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '3rem', textAlign: 'center' }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <i className="fa-solid fa-users" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}></i>
              <h3 className="counter" data-target="200">0</h3>
              <p>Volunteers</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <i className="fa-solid fa-user-graduate" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}></i>
              <h3 className="counter" data-target="6">0</h3>
              <p>Key Causes</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <i className="fa-solid fa-tree" style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem' }}></i>
              <h3 className="counter" data-target="20000">0</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Trees Planted</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <i className="fa-solid fa-map-location-dot" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}></i>
              <h3 className="counter" data-target="28">0</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>States Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div data-aos="fade-right">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Empowering Youth,<br/>Transforming Communities.</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>Founded on 23 September 2020 by Govind Shukla, InAmigos Foundation is a Section 8 non-profit organization dedicated to bridging the gap between intention and action.</p>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>We hold 80G, 12A, CSR-1 certifications, and are NITI Aayog registered & ISO 9001:2015 certified. Our focus spans across education, environment, animal welfare, and women empowerment.</p>
            <Link href="/about" className="btn btn-primary">Discover Our Journey <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i></Link>
          </div>
          <div data-aos="fade-left" style={{ position: 'relative' }}>
            <div className="glass" style={{ padding: '1rem', position: 'relative', zIndex: 2 }}>
              <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" alt="Volunteers working" style={{ borderRadius: '10px', width: '100%' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '200px', height: '200px', background: 'var(--secondary)', borderRadius: '50%', zIndex: 1, filter: 'blur(50px)', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Our Impact</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {/* Project 1 */}
            <div className="project-card glass-card" data-aos="fade-up" data-aos-delay="0">
              <div className="project-image" style={{ background: "url('https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg') center/cover", height: '250px', borderRadius: '10px 10px 0 0' }}></div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(15, 76, 129, 0.1)', color: 'var(--primary)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Community</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project SEVA</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Dedicated to serving the underprivileged by providing essential resources, food drives, and community support systems.</p>
                <Link href="/projects" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="glass-card" data-aos="fade-up" data-aos-delay="100">
              <div className="img-zoom" style={{ height: '250px' }}>
                <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" alt="Project BACHPANSHALA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(243, 156, 18, 0.1)', color: 'var(--secondary)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Education</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project BACHPANSHALA</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Bringing quality education and skill development to children from marginalized backgrounds to ensure a brighter future.</p>
                <Link href="/projects" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="glass-card" data-aos="fade-up" data-aos-delay="200">
              <div className="img-zoom" style={{ height: '250px' }}>
                <img src="https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg" alt="Project PRAKRITI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(39, 174, 96, 0.1)', color: 'var(--accent)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Environment</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project PRAKRITI</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Environmental conservation initiatives focusing on large-scale tree plantation, waste management, and sustainability.</p>
                <Link href="/projects" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }} data-aos="fade-up">
            <Link href="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', color: 'white' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary), var(--primary-light))', zIndex: -2 }}></div>
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '50%', height: '200%', background: 'rgba(255,255,255,0.05)', transform: 'rotate(30deg)', zIndex: -1 }}></div>
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', textAlign: 'center' }}>
          <div className="glass" style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }} data-aos="zoom-in">
            <i className="fa-solid fa-handshake-angle pulse-anim" style={{ fontSize: '4rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}></i>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Become a Volunteer</h3>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Dedicate your time and skills to make a real difference on the ground. Join our community of changemakers.</p>
            <Link href="/volunteer" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Join as Volunteer</Link>
          </div>
          <div className="glass" style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }} data-aos="zoom-in" data-aos-delay="100">
            <i className="fa-solid fa-laptop-code pulse-anim" style={{ fontSize: '4rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}></i>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Start an Internship</h3>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Gain valuable professional experience across various departments while contributing to social causes.</p>
            <Link href="/internship" className="btn btn-secondary">Apply for Internship</Link>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Our Volunteers</span>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" data-aos="fade-right" style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src="https://inamigosfoundation.org.in/public/storage/volunteers/1738081237.jpg" alt="Faiz Khan" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)' }}>Faiz Khan</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Volunteer Supervisor, UP</p>
                </div>
              </div>
            </div>

            <div className="glass-card" data-aos="fade-up" style={{ padding: '2rem', borderLeft: '4px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src="https://inamigosfoundation.org.in/public/storage/volunteers/1738127845.jpg" alt="Manavi jaiswal" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)' }}>Manavi Jaiswal</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Junior Volunteer Associate</p>
                </div>
              </div>
            </div>

            <div className="glass-card" data-aos="fade-left" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src="https://inamigosfoundation.org.in/public/storage/volunteers/1738080678.jpg" alt="Akash" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)' }}>Akash</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Volunteer Associate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
