import React, { Component } from 'react';
import "./searchEngine.scss";


class searchEngine extends Component {
    render() {
        return (
            <div>
                <div className="booking">
                    <div className="container-out">
                        <div className="container">
                            
                            <div className="card">
                                
                                    <div className="content-1">
                                        <div className="label-input">
                                            <label htmlFor="loction">Location</label>
                                        </div>
                                        <input type="text" className='from-control' placeholder='Location' />

                                    </div>
                                    <div class="vl"></div>
                                    <div className="content-2">
                                        <div className="label-input">
                                            <label htmlFor="label-input">Check In</label>
                                        </div>
                                        <input type="text" className='from-control' placeholder='check in date' />

                                    </div>
                                    <div class="vl"></div>
                                    <div className="content-3">
                                        <div className="label-input">
                                            <label htmlFor="label-input">Check Out</label>
                                        </div>
                                        <input type="text" className='from-control' placeholder='check out date' />

                                    </div>
                                    <div class="vl"></div>
                                    <div className="content-4">
                                        <div className="label-input">
                                            <label htmlFor="label-input">Room</label>
                                        </div>
                                        <input type="text" className='from-control' placeholder='' />

                                    </div>
                                    <div></div>
                                    {/*<button className='search'>Search</button>*/}
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default searchEngine;