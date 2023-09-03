import React from 'react'
import logo from './centre_logo.png'
import './Mainpage.css'
import vector1 from './Vector.svg'
import yellow from './yellow.svg' 
import green from './green.svg'
import blue from './blue.svg'
const Mainpage = () => {
  return (
    <div className="main-page">
      <div className="red-vector">
        <img className="red-image" src={vector1} alt="vector" />
        <img className="yellow-image" src={yellow} alt="yellow" />
      </div>
      <div className="title">
        <div className="upper-title">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="main">
            <h1>Google Developer Student Clubs</h1>
            <h2 className="sub-title">
              Jaypee Institute Of Information Technology, Noida-62
            </h2>
            <h4>Presents</h4>
          </div>
        </div>
        <div className="sub-main">
          <h1 className="events">HACKIN' SUMMERS 2023</h1>
          <h3 className="dates">September 23-24, 2023</h3>
        </div>
        <div>
          <h2 className="text">
            Gear up for a summer that is going to bring you
            a hackathon worth remembering. Scroll down for 
            registrations and prizes!
          </h2>
        </div>
        <div>
          <img
            className="blue-image"
            src={blue}
            alt="blue"
          />
          <img className="green-image" src={green} alt="green" />
        </div>
      </div>
    </div>
  );
}

export default Mainpage