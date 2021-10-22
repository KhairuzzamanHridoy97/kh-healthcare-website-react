import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Baby Care</h3>
      <p className='text-dark'>We have best baby treatment unit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Test Unit</h3>
      <p className='text-dark'>Properly test victim's condition here</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;