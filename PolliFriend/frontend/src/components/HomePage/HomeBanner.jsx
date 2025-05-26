import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';

function HomeBanner({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="HomeHeader">
      <div className="HomeBanner">
        <div className="HomeHamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
        {/* <h1>{name}</h1> */}
        <div className='BannerTitle'>
            <h2>Our Mission Story</h2>
            <div className='BannerDiscriptionBox'>
                <p>At PolliFriend we seek to help everyone from city planners to homeowners create a sustainable and eco-friendly space. Our design space is easy for anyone to understand and learn how to create carbon, pollination, and people friendly spaces. Our education page also allows anyone to learn new things about designing sustainably</p>
            </div>
        </div>
       
      </div>

      {menuOpen && (
        <div className="HomeSidebar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/CommunityPage" className="nav-link">Community</Link>
          <Link to="/EducationPage" className="nav-link">Education</Link>
          <Link to="/GardenPlanPage" className="nav-link">Plan</Link>
        </div>
      )}

      <div className="HomeBoarder"></div>
    </div>
  );
}

export default HomeBanner;
