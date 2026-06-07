import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              InAmigos<span>.</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Uniting minds for change. A registered Section 8 NGO empowering communities across India.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/projects">Our Projects</Link>
              <Link href="/impact">Impact Dashboard</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Get Involved</h3>
            <div className="footer-links">
              <Link href="/volunteer">Volunteer</Link>
              <Link href="/internship">Internship</Link>
              <Link href="/join">Donate</Link>
              <Link href="/join">Partner With Us</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="footer-links" style={{ color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--primary)', width: '20px' }}></i> Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, CG 495555</p>
              <p style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-envelope" style={{ color: 'var(--primary)', width: '20px' }}></i> inamigosfoundation@gmail.com</p>
              <p><i className="fa-solid fa-phone" style={{ color: 'var(--primary)', width: '20px' }}></i> +91 626 730 9902</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; <span>{new Date().getFullYear()}</span> InAmigos Foundation. All Rights Reserved. | 80G & 12A Certified</p>
        </div>
      </div>
    </footer>
  );
}
