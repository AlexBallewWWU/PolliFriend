import { useState } from 'react';
import Banner from '../Banner/Banner';
import './EducationPage.css';
import '../BoxButton/BoxButton.css';

function EducationPage() {
  const [activeCard, setActiveCard] = useState(null);

  const topics = [
  {
    title: "How to Encourage Pollinators",
    info: "To attract pollinators like bees, butterflies, and hummingbirds, focus on creating a diverse and vibrant garden with a variety of flowering plants, including native species, and ensure a succession of blooms throughout the growing season.",
    youtube: "https://www.youtube.com/embed/U-B86l-mEs8"
  },
  {
    title: "Use Resources Smartly",
    info: "Using resources smartly involves being mindful and efficient with how resources are utilized to maximize their impact while minimizing waste and environmental impact.",
    youtube: "https://www.youtube.com/embed/8c2wUQixF94"
  },
  {
    title: "What Plants to Use",
    info: "You can help pollinators significantly by growing a diversity of native plants in your space. Our regional native plant lists highlight species that support pollinators and biodiversity.",
    youtube: "https://www.youtube.com/embed/47Jv5pLIRdI"
  }
];


  return (
    <div className="education-background">
      <Banner name="What is Sustainable Gardening" />
      <div className="education-container">
        {topics.map((topic, index) => (
          <div key={index} className={`topic-row ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="box-container">
              <div className="Box">
                <h2>{topic.title}</h2>
                <button onClick={() => setActiveCard(index)}>Learn more</button>
              </div>
            </div>
            <div className="text-container">
              <p className="description">{topic.info}</p>
            </div>

            {activeCard === index && (
              <div className="modal" onClick={() => setActiveCard(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h2>Video:</h2>
                  {topic.youtube ? (
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="315"
                        src={topic.youtube}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <video src={topic.video} controls width="100%" />
                  )}
                  <h3>Additional Information:</h3>
                  <p>{topic.info}</p>
                  <button onClick={() => setActiveCard(null)}>Close</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;
