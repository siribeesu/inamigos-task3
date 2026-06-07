'use client';

import { useEffect, useRef } from 'react';

export default function Impact() {
  const growthChartRef = useRef(null);
  const distributionChartRef = useRef(null);

  useEffect(() => {
    let growthChartInstance = null;
    let distributionChartInstance = null;

    import('chart.js/auto').then(({ default: Chart }) => {
      const primaryColor = '#0F4C81';
      const secondaryColor = '#F39C12';
      const accentColor = '#27AE60';
      const textColor = '#2C3E50';

      if (growthChartRef.current) {
        const ctxGrowth = growthChartRef.current.getContext('2d');
        growthChartInstance = new Chart(ctxGrowth, {
          type: 'line',
          data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
              label: 'Lives Impacted (Thousands)',
              data: [2, 10, 25, 40, 50],
              borderColor: primaryColor,
              backgroundColor: 'rgba(15, 76, 129, 0.2)',
              borderWidth: 3,
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Yearly Impact Growth',
                color: textColor,
                font: { size: 18, family: 'Outfit' }
              },
              legend: { labels: { color: textColor } }
            },
            scales: {
              x: { ticks: { color: textColor }, grid: { color: 'rgba(0,0,0,0.05)' } },
              y: { ticks: { color: textColor }, grid: { color: 'rgba(0,0,0,0.05)' } }
            }
          }
        });
      }

      if (distributionChartRef.current) {
        const ctxDist = distributionChartRef.current.getContext('2d');
        distributionChartInstance = new Chart(ctxDist, {
          type: 'doughnut',
          data: {
            labels: ['Education', 'Environment', 'Animal Welfare', 'Community Support'],
            datasets: [{
              data: [35, 25, 20, 20],
              backgroundColor: [primaryColor, accentColor, '#E84393', secondaryColor],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Resource Distribution',
                color: textColor,
                font: { size: 18, family: 'Outfit' }
              },
              legend: { 
                position: 'bottom',
                labels: { color: textColor, padding: 20 }
              }
            },
            cutout: '70%'
          }
        });
      }
    });

    return () => {
      if (growthChartInstance) growthChartInstance.destroy();
      if (distributionChartInstance) distributionChartInstance.destroy();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        .stat-card {
            padding: 2rem;
            text-align: center;
            border-bottom: 4px solid var(--primary);
        }
        .stat-card i {
            font-size: 3rem;
            color: var(--secondary);
            margin-bottom: 1rem;
        }
        .stat-card h3 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        .stat-card p {
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .chart-container {
            padding: 2rem;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .charts-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        @media screen and (max-width: 992px) {
            .charts-wrapper {
                grid-template-columns: 1fr;
            }
        }
      `}} />

      {/* Page Header */}
      <div className="page-header">
          <div className="container">
              <h1 className="fade-in-up">Impact Dashboard</h1>
              <p className="fade-in-up stagger-1">Transparent numbers reflecting real change across our various initiatives.</p>
          </div>
      </div>

      {/* Impact Stats */}
      <section className="section">
          <div className="container">
              <div className="dashboard-grid">
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="0" style={{ borderColor: 'var(--primary)' }}>
                      <i className="fa-solid fa-users"></i>
                      <h3><span className="counter" data-target="50000">50000</span>+</h3>
                      <p>Lives Impacted</p>
                  </div>
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="100" style={{ borderColor: 'var(--accent)' }}>
                      <i className="fa-solid fa-tree"></i>
                      <h3><span className="counter" data-target="20000">20000</span>+</h3>
                      <p>Trees Planted</p>
                  </div>
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="200" style={{ borderColor: 'var(--secondary)' }}>
                      <i className="fa-solid fa-graduation-cap"></i>
                      <h3><span className="counter" data-target="30000">30000</span>+</h3>
                      <p>Youth Trained</p>
                  </div>
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="300" style={{ borderColor: '#E84393' }}>
                      <i className="fa-solid fa-person-dress"></i>
                      <h3><span className="counter" data-target="15000">15000</span>+</h3>
                      <p>Women Empowered</p>
                  </div>
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="400" style={{ borderColor: '#00CEC9' }}>
                      <i className="fa-solid fa-paw"></i>
                      <h3><span className="counter" data-target="8000">8000</span>+</h3>
                      <p>Animals Rescued</p>
                  </div>
                  <div className="glass-card stat-card" data-aos="zoom-in" data-aos-delay="500" style={{ borderColor: '#6C5CE7' }}>
                      <i className="fa-solid fa-hand-holding-heart"></i>
                      <h3><span className="counter" data-target="200">200</span>+</h3>
                      <p>Community Drives</p>
                  </div>
              </div>
              
              <div className="charts-wrapper" style={{ marginTop: '5rem' }}>
                  <div className="glass-card chart-container" data-aos="fade-right">
                      <div style={{ width: '100%', height: '100%' }}>
                          <canvas ref={growthChartRef}></canvas>
                      </div>
                  </div>
                  <div className="glass-card chart-container" data-aos="fade-left">
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <canvas ref={distributionChartRef} style={{ maxHeight: '350px' }}></canvas>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
