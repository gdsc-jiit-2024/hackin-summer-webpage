import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animation from './animation_lm3j1wb0.json';
import './Countdown.css';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = new Date('2023-09-23T00:00:00+0530').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = deadline - currentTime;

      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minsRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMins(minsRemaining);
      setSecs(secsRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="countdown-container">
        <h1>Forms will be opening soon !!!</h1>
        <div className="countdown-horizontal">
          <div className="countdown-unit">
            <h3 className="unit-value">{days < 10 ? '0' + days : days}</h3>
            <h3 className="unit-name">Days</h3>
          </div>
          <div className="countdown-unit">
            <h3 className="unit-value">{hours < 10 ? '0' + hours : hours}</h3>
            <h3 className="unit-name">Hours</h3>
          </div>
          <div className="countdown-unit">
            <h3 className="unit-value">{mins < 10 ? '0' + mins : mins}</h3>
            <h3 className="unit-name">Minutes</h3>
          </div>
          <div className="countdown-unit">
            <h3 className="unit-value">{secs < 10 ? '0' + secs : secs}</h3>
            <h3 className="unit-name">Seconds</h3>
          </div>
        </div>
        <div className="animation-container">
          <Lottie animationData={animation} />
        </div>
      </div>
  );
};

export default Countdown;
