import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from './../image/resort4.jpg';
import img2 from './../image/resort5.jpg';
import img3 from './../image/resort6.jpg';
import "./../CSS/Corosal.css";
// import { Link, } from "react-router-dom";

export default function Corosal() {
    return (
  <Carousel className="container-fluid mt-1 p-0">
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img2} alt="First slide"/>
   
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img3} alt="First slide"/>
    
  </Carousel.Item>
</Carousel>
    )
}
