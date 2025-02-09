import React from 'react';
import '../styles/Home.css';
import communityOutreachImg from '../assets/comm.jpg';
import sunday from '../assets/sunday.jpg';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Explicit Christian Centre</h1>
          <p>Raising unstoppable generations. Empowering Saints. Fulfilling Destiny.</p>
          <a href="/about" className="btn">Learn More</a>
        </div>
      </section>

      {/* Welcome Section (Our Mission + Video) */}
      <section className="welcome-section">
        <div className="container welcome-flex">
          {/* Mission Statement Section */}
          <section className="mission-statement">
            <div className="container">
              <div className="mission-header">
                <h2>Our Mission</h2>
                <p className="mission-tagline">Guided by Faith, Driven by Purpose</p>
              </div>

              <div className="mission-pillars">
                {/* Pillar 1 */}
                <div className="pillar-card">
                  <div className="pillar-icon">🙏</div>
                  <h3>God-Sensitive Foundation</h3>
                  <p>
                    We prioritize divine guidance in all we do, cultivating a spiritual environment 
                    where God's presence directs our decisions, relationships, and community impact.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="pillar-card">
                  <div className="pillar-icon">🤝</div>
                  <h3>Seeker-Friendly Community</h3>
                  <p>
                    Whether you're new to faith or deepening your walk with Christ, we provide 
                    a judgment-free space where questions are welcome and everyone belongs.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="pillar-card">
                  <div className="pillar-icon">💡</div>
                  <h3>Holistic Empowerment</h3>
                  <p>
                    We address the whole person through:
                    <ul className="mission-list">
                      <li>Spiritual nourishment through biblical teaching</li>
                      <li>Mental growth via life-skills workshops</li>
                      <li>Emotional support in caring small groups</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/2LoRu7Q1TY8"
              title="Church Welcome Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Commitment Section (Added Under Video) */}
          <div className="commitment-section">
            <h3>Our Commitment to You</h3>
            <p>
              "We pledge to be a church that doesn't just <em>talk</em> about faith, but <em>lives</em> it 
              through practical love, authentic relationships, and transformative service."
            </p>
            <blockquote className="scripture">
              "Let your light shine before others, that they may see your good deeds 
              and glorify your Father in heaven." <cite>Matthew 5:16</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="ministries-section">
        <div className="container">
          <h2 className="section-title">Our Ministries</h2>
          <div className="ministries-grid">
            <div className="ministry-card">
              <div className="ministry-image-container">
                <img 
                  src="https://i.pinimg.com/236x/1e/ec/bb/1eecbb071d2ab16abe91ce0629cd2ffe.jpg" 
                  alt="eGroups" 
                  className="ministry-image"
                />
              </div>
              <div className="ministry-content">
                <h3>eGroups</h3>
                <p className="ministry-description">
                  Connect deeply through our small group communities meeting weekly in homes.
                </p>
                <a href="#" className="cta-button">
                  Find a Group
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </div>

            {/* Repeat similar structure for other ministry cards */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
