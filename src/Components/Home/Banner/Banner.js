import React from 'react';

const Banner = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img style={{height: "550px"}} src="https://i.ibb.co/ZYcQjQD/slide1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img style={{height: "550px"}} src="https://i.ibb.co/xsjsc0v/slide2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img style={{height: "550px"}} src="https://i.ibb.co/72t1kRX/slide3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;