import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from "prop-types"
import "./CarouselSlick.scss"
const faceContent = [
    {
        id:1,
        symbol: "*****",
        firstLine: "I was truly impressed by the exceptional housekeeping and impeccable cleanliness that permeated every corner of the establishment.My room was a haven of cleanliness, with every detail meticulously taken care of. The well-made bed, pristine bathroom, and dust-free surfaces truly showcased their commitment to excellence.I'm already looking forward to my next visit.",
        secondLine: "Arounkumar V",
        thirdLine: "Happy customer",
        image: "",
    },
    {
        id:2,
        symbol:"****",
        firstLine: "Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive. Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.",
        secondLine: "Surya",
        thirdLine: "Happy customer",
        image: "",
    },
    {
        id:3,
        symbol: "*****",
        firstLine: "I was truly impressed by the exceptional housekeeping and impeccable cleanliness that permeated every corner of the establishment.My room was a haven of cleanliness, with every detail meticulously taken care of. The well-made bed, pristine bathroom, and dust-free surfaces truly showcased their commitment to excellence.I'm already looking forward to my next visit.",
        secondLine: "Vijay V",
        thirdLine: "Happy customer",
        image: "",
    },
    {
        id:4,
        symbol:"****",
        firstLine: "Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive. Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.",
        secondLine: "Mani",
        thirdLine: "Happy customer",
        image: "",
    },
   
  ];

class CarouselSlickReview extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 3000,
            swipeToSlide:4,
         };
        return (
            <div className="container-s">
            <div className="content-slick">
              <div className="container-slick" >

                <Slider {...settings}>

                {faceContent.map((fc) => (
                    <div className="comment-1" key={fc.id}>
                    <div className="part-first-c">
                        <span className='symbol'>{fc.symbol}</span>
                        <span className='head-1'>{fc.firstLine}</span>
                    </div>
                    <div className="part-second-c">
                        <div className="profile-p">
                            <span className='p-image'>{fc.image}</span>
                        </div>
                        <div className="name-tag">
                            <span className='name-c'>{fc.secondLine}</span>
                            <span className="cust-c"> {fc.thirdLine}</span>
                        </div>
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
CarouselSlickReview.propTypes = {
    faceContent: PropTypes.array.isRequired
    };

export default CarouselSlickReview;