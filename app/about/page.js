export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ position: 'relative', background: "url('https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg') center/cover", padding: '8rem 0 4rem', color: 'white', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 76, 129, 0.8)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="fade-in-up">About Us</h1>
          <p className="fade-in-up stagger-1" style={{ fontSize: '1.2rem', opacity: 0.9 }}>Discover the story behind InAmigos Foundation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Our Mission</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              To bridge the gap between intention and action by empowering youth and communities to create sustainable, positive change across education, environment, animal welfare, and women empowerment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
