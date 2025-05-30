import { useState } from 'react';
import { Link, Links } from 'react-router-dom';
import './Banner.css';
import logo from '../../../public/PolliFriendLogo.png'

function Banner({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Header">
      <div className="Banner">
        <div className='header-left'>
          <a href='/'>
            <img className="hamburger-img" src={logo} alt="" />
          </a>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
        </div>
        <h1>
          <Link className="link-clean" to="/">{name}</Link>
        </h1>
      </div>

      {menuOpen && (
        <div className="sidebar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/CommunityPage" className="nav-link">Community</Link>
          <Link to="/EducationPage" className="nav-link">Education</Link>
          <Link to="/GardenPlanPage" className="nav-link">Plan</Link>
        </div>
      )}

      <div className="Boarder"></div>
    </div>
  );
}

export default Banner;
