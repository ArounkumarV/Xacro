import React, { Component } from 'react';
import "./card.scss";

class card extends Component {
    render() {
        return (
            <div>
            <div className="container-out">
            <div className="container-x">
                <div className="container">
                    <div className="card-one">
                        <div className="card-1">
                            <h2>Experential <br /> Stays</h2>
                        </div>
                        <div className="card-2">
                            <h2>Stay</h2>
                        </div>
                        <div className="card-3">
                            <h2>Experiences</h2>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default card;