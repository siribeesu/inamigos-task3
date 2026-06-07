'use client';

import { useState } from 'react';

const galleryData = [
  { id: 1, category: 'education', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg', title: 'Education Camp', subtitle: 'Project BACHPANSHALA' },
  { id: 2, category: 'environment', img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg', title: 'Tree Plantation', subtitle: 'Project PRAKRITI' },
  { id: 3, category: 'animal', img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg', title: 'Stray Feeding', subtitle: 'Project JEEV' },
  { id: 4, category: 'volunteer', img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg', title: 'Volunteer Training', subtitle: 'Delhi Chapter' },
  { id: 5, category: 'community', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg', title: 'Ration Distribution', subtitle: 'Project SEVA' },
  { id: 6, category: 'women', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg', title: 'Skill Workshop', subtitle: 'Women Empowerment' },
  { id: 7, category: 'environment', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg', title: 'Lake Cleanup', subtitle: 'Project PRAKRITI' },
  { id: 8, category: 'education', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg', title: 'Stationery Distribution', subtitle: 'Project BACHPANSHALA' },
  { id: 9, category: 'animal', img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg', title: 'Medical Camp', subtitle: 'Project JEEV' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredGallery = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .filter-btns {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
        }
        .filter-btn {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
        }
        .filter-btn:hover, .filter-btn.active {
            background: var(--primary);
            color: #fff;
        }
        [data-theme="dark"] .filter-btn {
            border-color: var(--text-main);
            color: var(--text-main);
        }
        [data-theme="dark"] .filter-btn:hover, [data-theme="dark"] .filter-btn.active {
            background: var(--text-main);
            color: var(--bg-color);
        }
        
        .masonry-gallery {
            column-count: 3;
            column-gap: 1.5rem;
        }
        @media (max-width: 992px) {
            .masonry-gallery { column-count: 2; }
        }
        @media (max-width: 576px) {
            .masonry-gallery { column-count: 1; }
        }
        
        .gallery-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
            transition: var(--transition);
        }
        .gallery-item img {
            width: 100%;
            display: block;
            border-radius: 15px;
            transition: transform 0.5s ease;
        }
        .gallery-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(15, 76, 129, 0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition);
            color: white;
        }
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        /* Lightbox */
        .lightbox {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }
        .lightbox.active {
            opacity: 1;
            visibility: visible;
        }
        .lightbox-img {
            max-width: 90%;
            max-height: 90%;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            border-radius: 10px;
        }
        .lightbox-close {
            position: absolute;
            top: 30px; right: 40px;
            color: white;
            font-size: 2.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        .lightbox-close:hover { color: var(--secondary); }
      `}} />

      {/* Page Header */}
      <div className="page-header">
          <div className="container">
              <h1 className="fade-in-up">Impact Gallery</h1>
              <p className="fade-in-up stagger-1">A visual journey of smiles, hard work, and transformation.</p>
          </div>
      </div>

      {/* Gallery Section */}
      <section className="section">
          <div className="container">
              <div className="filter-btns" data-aos="fade-up">
                  <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                  <button className={`filter-btn ${filter === 'education' ? 'active' : ''}`} onClick={() => setFilter('education')}>Education</button>
                  <button className={`filter-btn ${filter === 'environment' ? 'active' : ''}`} onClick={() => setFilter('environment')}>Environment</button>
                  <button className={`filter-btn ${filter === 'animal' ? 'active' : ''}`} onClick={() => setFilter('animal')}>Animal Welfare</button>
                  <button className={`filter-btn ${filter === 'women' ? 'active' : ''}`} onClick={() => setFilter('women')}>Women Empowerment</button>
                  <button className={`filter-btn ${filter === 'community' ? 'active' : ''}`} onClick={() => setFilter('community')}>Community Service</button>
                  <button className={`filter-btn ${filter === 'volunteer' ? 'active' : ''}`} onClick={() => setFilter('volunteer')}>Volunteer Activities</button>
              </div>

              <div className="masonry-gallery">
                  {filteredGallery.map(item => (
                      <div key={item.id} className={`gallery-item ${item.category}`} data-aos="zoom-in" onClick={() => setLightboxImg(item.img)}>
                          <img src={item.img} alt={item.title} />
                          <div className="gallery-overlay">
                              <h3>{item.title}</h3>
                              <p>{item.subtitle}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxImg ? 'active' : ''}`} onClick={(e) => { if(e.target === e.currentTarget) setLightboxImg(null); }}>
          <span className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</span>
          {lightboxImg && <img src={lightboxImg} alt="Fullscreen" className="lightbox-img" />}
      </div>
    </>
  );
}
