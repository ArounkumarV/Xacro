import React, { Component } from 'react';
import "./CarouselCard2.scss";
import PropTypes from "prop-types"
const faceContent = [
        {
            symbol: "*****",
            firstLine: "I was truly impressed by the exceptional housekeeping and impeccable cleanliness that permeated every corner of the establishment.My room was a haven of cleanliness, with every detail meticulously taken care of. The well-made bed, pristine bathroom, and dust-free surfaces truly showcased their commitment to excellence.I'm already looking forward to my next visit.",
            secondLine: "Arounkumar V",
            thirdLine: "Happy customer",
            image: "",
        },
        {
            symbol:"****",
            firstLine: "Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive. Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.",
            secondLine: "Surya",
            thirdLine: "Happy customer",
            image: "",
        },
        {
            symbol: "*****",
            firstLine: "I was truly impressed by the exceptional housekeeping and impeccable cleanliness that permeated every corner of the establishment.My room was a haven of cleanliness, with every detail meticulously taken care of. The well-made bed, pristine bathroom, and dust-free surfaces truly showcased their commitment to excellence.I'm already looking forward to my next visit.",
            secondLine: "Arounkumar V",
            thirdLine: "Happy customer",
            image: "",
        },
        {
            symbol:"****",
            firstLine: "Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive. Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.",
            secondLine: "Surya",
            thirdLine: "Happy customer",
            image: "",
        },
       
      ];
      
class CarouselCard2 extends Component {
        constructor() {
          super();
          this.state = {
            activeIndex: 0
          };
          this.onNextClick = this.onNextClick.bind(this);
        }
        componentDidMount() {
          this.interval = setInterval(this.onNextClick, 5000);
       }
       componentWillUnmount() {
           //to clear the set interval at unmount of the component
          clearInterval(this.interval);
        }
        goToSlide = index => {
          this.setState({
            activeIndex: index
          });
        };
        onNextClick = () => {
          if (this.state.activeIndex < 1) {
            this.setState({ activeIndex: this.state.activeIndex +2 });
          } else {
            this.setState({ activeIndex: 0 });
          }
        };
        render() {
          let sliderStyle = {
           transform: `translateX(${this.state.activeIndex * -110}%)`,
           transition: "0.5s"
          };
          return (
            <div className="face-slider">
              <ol className="slide-container" >
                {faceContent.map((fc, index) => (
                  <div className="comment-1" key={index} style={sliderStyle} onClick={e => this.goToSlide(index)}>
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
              </ol>
              <ul className="c-indicators">
              
                {faceContent &&
                  faceContent.map((fc, index) => (
                    <li key={index} >
                      <a
                        className={`c-indicator ${
                          index === this.state.activeIndex ? "c-indicator-active" : ""
                        }`}
                        onClick={e => this.goToSlide(index)}
                      />
                    </li>
                  ))}
                    </ul>
            </div>
          );
        }
      }
CarouselCard2.propTypes = {
faceContent: PropTypes.array.isRequired
};

export default CarouselCard2;