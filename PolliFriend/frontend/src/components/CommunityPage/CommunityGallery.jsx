import { useEffect, useState } from 'react';
import './CommunityGallery.css';

function CommunityGallery() {
  const [search, setSearch] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/submissions')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error('Error fetching:', err));
  }, []);

  const handleLike = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/submissions/${id}/like`, {
      method: 'POST',
    });
    const updated = await res.json();
    console.log("Liked Submission:", updated); // 👈 Add this
    setSubmissions(submissions.map(s => s._id === id ? updated : s));
  } catch (err) {
    console.error('Failed to like:', err);
  }
};

  const filtered = submissions.filter((entry) =>
    entry.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <div className="header-row">
        <div>
          <h2 className="section-title">Latest Examples</h2>
          <p className="subtitle">{submissions.length} submissions</p>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.map((entry, index) => (
        <div key={index} className="example-row">
          <div className="image-pair">
            <div className="example-box">
              <h3>Before:</h3>
              <img className="example-image" src={entry.beforeImageUrl} alt="Before" />
            </div>
            <div className="example-box">
              <h3>After:</h3>
              <img className="example-image" src={entry.afterImageUrl} alt="After" />
            </div>
          </div>
          <p className="submitted-text">Submitted by {entry.name} in {entry.location}</p>
          
          <div className="like-section">
            <button onClick={() => handleLike(entry._id)}>❤️ {entry.likes || 0}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityGallery;
