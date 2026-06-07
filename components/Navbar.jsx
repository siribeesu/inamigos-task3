import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div className="container nav-container glass">
        <Link href="/" className="logo">
          InAmigos<span>.</span>
        </Link>
        
        <nav className="nav-links">
          <Link href="/" className="active">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <button className="theme-toggle" aria-label="Toggle dark mode">🌙</button>
          <Link href="/join" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>Join Now</Link>
          <button className="mobile-menu-btn"><i className="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </header>
  );
}
