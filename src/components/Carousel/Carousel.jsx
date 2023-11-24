import React, { Component } from 'react';
import "./Carousel.scss";
import PropTypes from "prop-types"
const faceContent = [
        {
            icon: require("../../assets/image/stays.jpg"),
            firstLine: "50%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
            icon: require("../../assets/image/Jeep.jpg"),
            firstLine: "35%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
            icon: require("../../assets/image/bird.jpg"),
            firstLine: "25%",
            secondLine: "This can be a detailed description or just a short text."
        },
        {
          icon: require("../../assets/image/owl.jpg"),
          firstLine: "20%",
          secondLine: "This can be a detailed description or just a short text."
        }
      ];
      
class Carousel extends Component {
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
                  <div className="message " key={index} style={sliderStyle} onClick={e => this.goToSlide(index)}>
                    <div className="part-first">
                        <img  className="carousel-img" src={fc.icon} alt="" />
                    </div>
                    <div className="part-second">
                        <span className='head-1'>{fc.firstLine}</span>
                        <span  className='p-1'>{fc.secondLine}</span>
                        <button className='book'>BOOK NOW</button>
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
                          index == this.state.activeIndex ? "c-indicator-active" : ""
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
Carousel.propTypes = {
faceContent: PropTypes.array.isRequired
};

export default Carousel;