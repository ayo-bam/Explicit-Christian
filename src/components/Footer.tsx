import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="image-footer">
      <div className="container">
        <p className="footer-email">
          <strong>Explicitchristiancentre@gmail.com</strong>
        </p>
        <p className="footer-phone">
          +1 (825) 747-9451 | +1 (825) 994-7840
        </p>
        <p className="footer-copy">
          Copyright © 2024 explicitchristiancentre | Powered by explicitchristiancentre
        </p>
      </div>
    </footer>
  );
};

export default Footer;
