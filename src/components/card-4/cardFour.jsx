import React, { Component } from 'react';
import "./cardFour.scss";
import CarouselSlickReview from '../Carousel-slick/CarouselSlickReview';

class cardFour extends Component {
    render() {
        return (
            <div>
            {/*<div className="booking">*/}
            <div className="container-out">
                <div className="container">
                    <div className="title">
                        <div className="part1">
                            <h1>What people say..</h1>
                            <p>This can be a detailed description or just a short text.</p>
                        </div>
                        <div className="part2">
                            <button className='book'>View All</button>
                        </div>
                    </div>
                    <div className="card-second">
                       <CarouselSlickReview/>
                    
                    
                        {/*<div className="f-card">
                          <div className="cr-one">
                           <h2>* * * * *</h2>
                           <p>I was truly impressed by the exceptional housekeeping and impeccable cleanliness that permeated every corner of the establishment.
                           My room was a haven of cleanliness, with every detail meticulously taken care of. The well-made bed, pristine bathroom, and dust-free surfaces truly showcased their commitment to excellence.
                           I'm already looking forward to my next visit.</p>
                          </div>
                          <div className="details-1">
                            <div className="img"></div>
                            <div className="name-tag">
                                <h2>Arounkumar V</h2>
                                <p>Happy Customer</p>
                            </div>

                            
                           
                          </div>
                        </div>
                        <div className="s-card">
                          <div className="cr-one">
                            <h2>* * * *</h2>
                            <p>Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive. Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.</p>
                          </div>
                          <div className="details-1">
                            <div className="img"></div>
                            <div className="name-tag">
                                <h2>Suriya</h2>
                                <p>Happy Customer</p>
                                </div>
                          </div>
                        </div>*/}
                    </div>
                </div>
                </div>
                
        {/*</div>*/}
        </div>
        );
    }
}

export default cardFour;