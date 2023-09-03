import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animation from './animation_lm3exq3d.json';
import './About.css';

const About = () => {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      if (window.scrollY > 300) {
        setShowSections(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className="title">
        <h1>About The Event</h1>
      </div>
      <div className={`text ${showSections ? 'show' : ''}`}>
        <div className="about-left">
          <p className="about">
            Hackin' Summer is one of the biggest and most awaited student-held
            Hackathon of Delhi NCR organized by JIIT Noida this year, where you
            can convert your crazy ideas to a reality. This hackathon will be a
            great platform for all pro-players in the field and at the same time
            a kickstart for new hackers willing to join the league and find
            their footing in the arena of innovation and technologies.
          </p>
        </div>
        <div className="about-right">
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  );
};

export default About;
