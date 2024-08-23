import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BackgroundImage from './IMG_0191.JPG'; // Import the image

      import myImage from './IMG_0193.JPG';

const HomePage = () => {
  const sectionStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0px 65px 0px ',
    color: 'white', // Text color for better readability
    textAlign: 'center', // Center the text content
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay to dim the background image
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div>
  

      <section style={sectionStyle}>
        <div style={overlayStyle}></div> {/* Overlay for dimming */}
        <div style={contentStyle}>
          <h1>Welcome to DriveMart</h1>
          <p>Your one-stop destination for buying and selling cars.</p>
          <Link to="/cars" className="btn btn-primary mt-3">
            Browse Cars
          </Link>
        </div>
      </section>

      {/* Add other sections/content as needed */}




      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={myImage} className="d-block mx-lg-auto img-fluid" alt="MyDriveMart" width="400" height="400" loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h5 className="fw-bold text-body-emphasis lh-1 mb-3" style={{ fontSize: '3rem' }}>
        Your Ultimate Destination for Smart Driving Solutions
      </h5>
      <p className="lead">
        Explore a wide range of innovative driving tools and resources at MyDriveMart. Whether you're a new driver or a seasoned professional, we offer the latest in smart driving technology, tips, and products. From advanced navigation systems to eco-friendly driving accessories, find everything you need to enhance your driving experience and stay safe on the road.
      </p>
    </div>
  </div>
</div>



    </div>
  );
};

export default HomePage;
