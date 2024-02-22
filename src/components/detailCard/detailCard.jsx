import React, { Component } from 'react';
import "./detailCard.scss";
import R_arrow from "../../assets/image/right-arrow.png";
import User from "../../assets/image/user.png";
import Room from "../../assets/image/room.png";
import Bed from "../../assets/image/bed.png";
import SingleBed from "../../assets/image/single-bed.png";
import Bathtub from "../../assets/image/bathtub.png";
import NoSmoking from "../../assets/image/no-smoking.png";
import Wifi from "../../assets/image/wi-fi.png";
import Service from "../../assets/image/service.png";
import Coffee from "../../assets/image/coffee.png";
import Toiletries from "../../assets/image/toiletries.png";
import Hairdryer from "../../assets/image/hairdryer.png";
import Bathrobe from "../../assets/image/bathrobe.png";
import Alarm from "../../assets/image/alarm.png";
import Restuarant from "../../assets/image/restaurant.png";
import GoogleMap from './GoogleMap';

class detailCard extends Component {
    render() {
        return (
            
               <div className="container-I">
                    <div className="container">
                        {/*<div className="list-d">
                            <ul>
                                <li>
                                <p>Home</p>
                                <img src={R_arrow} className='R-arrow' alt="r-arrow" />
                                </li>
                                <li>
                                <p>Kodaikanal</p>
                                <img src={R_arrow} className='R-arrow' alt="r-arrow" />
                                </li>
                                <li>
                                <p>Xperential Stay</p>
                                </li>
                            </ul>
                        </div>*/}
                        <div className="list-container">
                            <div className="list-flex">
                                <div className="picture-1">
                                    <div className="p-one"></div>
                                </div>
                                <div className="picture-2">
                                    <div className="p-two"></div>
                                    <div className="p-three"></div>
                                    <div className="p-four"></div>
                                    <div className="p-map">
                                    <GoogleMap/>
                                    </div>
                                </div>
                            </div>
                            <div className="list-flex">
                                <div className="r-msg">
                                    <h1>Dome Stay</h1>
                                    <p>Kovilpatti, Kodaikanal</p>
                                    <h4>* 4.8</h4>
                                    <p>Most remarkable to us was hotel staff from security, doorman, concierge, front office ,restaurants were pleasant, courteous, well trained and attentive.Big thanks to helpful desk executive Ms. Triparna who could fully respond to our requests for assistance promptly and beyond our expectations. To confirm our comments here, we will come back again soon.</p>
                                </div>
                                <div className="pay">
                                    <div className="count-d">
                                        <div className="column-1">
                                            <label htmlFor="checkIn"> Check-in</label>
                                            <input type="text" className='from-control' value="12 pm"/>
                                        </div>
                                        <div className="column-2">
                                            <label htmlFor="checkIn"> Check-out</label>
                                            <input type="text" className='from-control' value= "11 pm"/>
                                        </div>
                                        <div className="column-3">
                                            <div className="point-1">
                                                <img src={User} alt="" className='room'/>
                                                <p>2 x Guests</p>
                                            </div>
                                            <div className="point-2">
                                                <img src={Room} className='room' alt="" />
                                                <p>1 x Room</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="amount">
                                        <div className="pay-fare">
                                          <div className="total">
                                            <h2>₹ 7000</h2>
                                            <p>/night</p>
                                          </div>
                                          <div className="tax">
                                            <p>+₹ 666 taxes & fees</p>
                                          </div>
                                        </div>
                                        <div className="book-btn">
                                            <button className='book'><a href="https://www.secure-booking-engine.com/accounts/v99jfOkR03dXYzHQhpItgg/properties/hLbhZCq-M8Rj7opE4olhbQ/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/">BOOK NOW</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="amenities">
                                <h1>Popular Amenities</h1>
                                <div className="icons">
                                    <div className="pop">
                                      <img src={Bed} alt="" className='icon-a'/>
                                      <label htmlFor="">King Bed</label>
                                    </div>
                                    <div className="pop">
                                      <img src={SingleBed} alt=""  className='icon-a'/>
                                      <label htmlFor="">Single Bed</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Bathtub} alt="" className='icon-a' />
                                      <label htmlFor="">Shower or <br />Bath tub</label>
                                    </div>
                                    <div className="pop">
                                      <img src={NoSmoking} alt=""  className='icon-a'/>
                                      <label htmlFor=""> No Smoking</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Wifi} alt="" className='icon-a' />
                                      <label htmlFor="">Free Wifi</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Service} alt="" className='icon-a'/>
                                      <label htmlFor="">Service</label>
                                    </div>
                                </div>
                                <div className="icons">
                                    <div className="pop">
                                      <img src={Coffee} alt="" className='icon-a'/>
                                      <label htmlFor="">Coffee or Tea <br />Maker</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Toiletries} alt=""  className='icon-a'/>
                                      <label htmlFor="">Toiletries</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Hairdryer} alt="" className='icon-a' />
                                      <label htmlFor="">Sower or <br />Hair Dryer</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Bathrobe} alt=""  className='icon-a'/>
                                      <label htmlFor=""> Bathrobe</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Alarm} alt="" className='icon-a' />
                                      <label htmlFor="">Wake Up <br /> Service</label>
                                    </div>
                                    <div className="pop">
                                      <img src={Restuarant} alt="" className='icon-a'/>
                                      <label htmlFor="">Restaurant</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
               </div> 
           
        );
    }
}

export default detailCard;