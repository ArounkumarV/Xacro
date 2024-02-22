import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from "prop-types"
import "./CarouselSlick.scss"
const faceContent = [
        {
            id: 1,
            icon: require("../../assets/image/stays.jpg"),
            firstLine: "50%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
            id: 2,
            icon: require("../../assets/image/Jeep.jpg"),
            firstLine: "35%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
            id: 3,
            icon: require("../../assets/image/bird.jpg"),
            firstLine: "25%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
          id: 4,
          icon: require("../../assets/image/owl.jpg"),
          firstLine: "20%",
          secondLine: "This can be a detailed description or just a short text."
        }
      ];
      
class Carousel extends Component {
        render() {
          const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            swipeToSlide:4,
            
            
          };
             
          
          return (
            
            
              <div className="container-s">
                <div className="content-slick">
                  <div className="container-slick" >

                    <Slider {...settings}>

                    {faceContent.map((fc) => (
                      <div className='box-slick' key={ fc.id} >
                        <div className="part-first">
                            <img  className="carousel-img" src={fc.icon} alt="" />
                        </div>
                        <div className="part-second">
                            <span className='head-1'>{fc.firstLine}</span>
                            <span  className='p-1'>{fc.secondLine}</span>
                            <button className='book'>
                              <a href="https://www.secure-booking-engine.com/accounts/v99jfOkR03dXYzHQhpItgg/properties/hLbhZCq-M8Rj7opE4olhbQ/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/">BOOK NOW</a>
                            </button>
                        </div>
                      </div>
                    ))}
                    </Slider>
                  </div>
                </div> 
              </div>
          
           
          );
        }
      }
Carousel.propTypes = {
faceContent: PropTypes.array.isRequired
};

export default Carousel;
