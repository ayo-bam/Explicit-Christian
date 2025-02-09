import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Explicit Christian Centre Logo" className="logo" />
        </Link>
        <Link to="/" className="logo-text">Explicit Christian Centre</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/media">Media</Link></li> {/* Added Media page */}
      </ul>
    </nav>
  );
};

export default Navbar;
