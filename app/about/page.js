export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ position: 'relative', background: "url('https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg') center/cover", padding: '8rem 0 4rem', color: 'white', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(44, 62, 80, 0.9))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }} className="fade-in-up">About Us</h1>
          <p className="fade-in-up stagger-1" style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Discover the story, mission, and vision behind the InAmigos Foundation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <h2 className="section-title">Who We Are</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              InAmigos Foundation is a registered non-profit organization focused on bridging the gap between intention and action. We empower youth and communities to create sustainable, positive change across various critical sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--primary)' }} data-aos="fade-right">
              <i className="fa-solid fa-bullseye" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                To empower individuals and communities by providing resources, education, and support systems that foster long-term sustainable development and self-reliance.
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--secondary)' }} data-aos="fade-left">
              <i className="fa-solid fa-eye" style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                A world where every individual, regardless of their background, has access to basic rights, quality education, and the opportunity to lead a dignified life.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: 'fa-hand-holding-heart', title: 'Compassion', desc: 'Acting with deep empathy and care for all living beings.' },
              { icon: 'fa-scale-balanced', title: 'Integrity', desc: 'Upholding transparency and honesty in all our operations.' },
              { icon: 'fa-users', title: 'Collaboration', desc: 'Believing in the power of collective action and teamwork.' },
              { icon: 'fa-leaf', title: 'Sustainability', desc: 'Creating solutions that endure and protect our future.' }
            ].map((value, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(15, 76, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <i className={`fa-solid ${value.icon}`} style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                </div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
