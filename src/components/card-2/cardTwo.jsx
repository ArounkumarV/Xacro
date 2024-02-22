import React, { Component } from 'react';
import "./cardTwo.scss";
import Carousel from '../Carousel/Carousel';
import CarouselSlick from "../Carousel-slick/CarousleSlick";



class cardTwo extends Component {

    render() {
        
        return (
            <div>
        <div className="booking">
            <div className="container-c">
                <div className="container">
                    <div className="title">
                        <div className="part1">
                            <h1>Best offer of this month</h1>
                            <p>This can be a detailed description or just a short text.</p>
                        </div>
                        <div className="part2">
                            <button className='book'>View All</button>
                        </div>
                    </div>

                    <div className="card-second">
                        <CarouselSlick/>
                     
                    
                    
                    {/*<div className="wrapper">
                        <ul className='carousel'>
                            <li className='card'>
                                <div className="first-card" draggable="false">
                                <div className="c-one">
                                </div>
                                <div className="detail-1">
                                    <h1>50% Off</h1>
                                    <p>This can be a detailed description or just a short text.</p>
                                    <button className='book'>BOOK NOW</button>
                                </div>
                                </div>
                            </li>
                            <li className='card'>
                                <div className="second-card" draggable="false">
                                <div className="c-one">
                                </div>
                                <div className="detail-1">
                                    <h1>50% Off</h1>
                                    <p>This can be a detailed description or just a short text.</p>
                                    <button className='book'>BOOK NOW</button>
                                </div>
                                </div>
                            </li>
                            <li className='card'>
                                <div className="third-card" draggable="false">
                                <div className="c-one">
                                </div>
                                <div className="detail-1">
                                    <h1>50% Off</h1>
                                    <p>This can be a detailed description or just a short text.</p>
                                    <button className='book'>BOOK NOW</button>
                                </div>
                                </div>
                            </li>
                             
                            
                        </ul>
                        </div>*/}
                    </div>
                </div>
                </div>
                    </div>
            </div>
        );
    }
}


export default cardTwo;