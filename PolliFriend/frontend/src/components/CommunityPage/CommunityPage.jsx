import Banner from '../Banner/Banner';
import CommunityGallery from './CommunityGallery';
import './CommunityPage.css';

function CommunityPage() {
  return (
    <>
      <Banner name="Community Examples" />
      <div className="community-wrapper">
        <div className="community-page">
          <CommunityGallery />
          <div className="submission-invite">
            <h2>Want to share your garden transformation?</h2>
            <p>
              Email us your photos and location at <strong>pollifriend@gmail.com</strong>.
              We’ll review and post selected submissions!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
