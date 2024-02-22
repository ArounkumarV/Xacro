import React, { Component } from 'react';
import"./header.scss";

class header extends Component {
    render() {
        return (
            <div >
                <header className='fixed-header'>
                <div className="container">
                    <div className="flex-group-1">
                    <div className="content-one">
                        <h1>XACRO</h1>
                        <ul className='content-list'>
                            <li>Booking</li>
                            <li>Facilities</li>
                            <li>Room</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                        {/*<div className="content-two">
                        <button className='log'>Login</button>
                           <button className='sign'>sign up</button>
                        </div>*/}
                    </div>
                   
                    </div>
                    
                
                </header>
                
            </div>
        );
    }
}

export default header;