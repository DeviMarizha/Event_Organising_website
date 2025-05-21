
import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import '../styles/Home.css'; // Create a new CSS file for the Home page styles

const Home = () => {
  return (
    <div className='Home'>
 
      <div className='home'>
        <div className='home-heading'>
          <h1>Welcome to Eventa</h1>
          <p>
            Your premier event planning company, creating unforgettable experiences.
          </p>
        </div>

        <div className='home-content'>
          <div className='transparent-box'>
            <h2>About Eventa</h2>
            <p>
              At Eventa, we specialize in planning and executing memorable events that leave a lasting impression.
              From weddings to corporate events, we make every occasion extraordinary.
            </p>

            <h2>Our Services</h2>
            <p>
              Whether it's a grand celebration or an intimate gathering, our team ensures flawless execution from start to finish.
            </p>

            <h2>Get Started</h2>
            <p>
              Ready to plan your next event? Let Eventa bring your vision to life.
            </p>
            <Link to="/about">
              <button className="btn-about">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
