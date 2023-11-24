import React, { Component } from 'react';
import "./listingPart.scss";
import Dome from "../../assets/image/dome.jpg";
import Cottage from "../../assets/image/cottage.jpg";
import Mordern from "../../assets/image/morden.jpg";


class listingPart extends Component {
    render() {
        return (
            <div>
            <div className="booking">
            <div className="container-l">
                <div className="container">
                    <div className="title">
                        <div className="part1">
                            <h1>Best Pick For You</h1>
                            <p>Discover the ultimate blend of comfort, luxury and adventure.</p>
                        </div>
                        <div className="part2">
                            <button className='book'>View All</button>
                        </div>

                    </div>
                    <div className="card-second-2">
                        <div className="m-card">
                            <div className="item1">
                                <div className="pic-1">
                                    
                                </div>
                                <div className="h-detail">
                                    <h3>Dome Stay</h3>
                                    <p>Kovilpatti,Kodaikanal</p>
                                </div>
                                <div className="fare">
                                    <h2>₹ 9000</h2>
                                    <p>/night</p>
                                </div>
                            </div>
                            <div className="item2">
                                <div className="pic-1">
                               
                                </div>
                                <div className="h-detail">
                                <h3>Akkandi Veedu</h3>
                                <p>Chettiyar park Rd, Kodaikanal.</p>
                                </div>
                                <div className="fare">
                                    <h2>₹ 7000</h2>
                                    <p>/night</p>
                                </div>
                            </div>
                            <div className="item3">
                                <div className="pic-1">
                                    
                                </div>
                                <div className="h-detail">
                                    <h3>Mordern House</h3>
                                    <p>Attuvampatti, Kodaikanal.</p>
                                </div>
                                <div className="fare">
                                    <h2> ₹ 10000</h2>
                                    <p>/night</p>
                                </div>
                                </div>
                        </div>
                        <div className="m-card">
                            <div className="item1">
                                <div className="pic-1">
                                    
                                </div>
                                <div className="h-detail">
                                    <h3>Dome Stay</h3>
                                    <p>Kovilpatti,Kodaikanal</p>
                                </div>
                                <div className="fare">
                                    <h2>₹ 9000</h2>
                                    <p>/night</p>
                                </div>
                            </div>
                            <div className="item2">
                                <div className="pic-1">
                               
                                </div>
                                <div className="h-detail">
                                <h3>Akkandi Veedu</h3>
                                <p>Chettiyar park Rd, Kodaikanal.</p>
                                </div>
                                <div className="fare">
                                    <h2>₹ 7000</h2>
                                    <p>/night</p>
                                </div>
                            </div>
                            <div className="item3">
                                <div className="pic-1">
                                    
                                </div>
                                <div className="h-detail">
                                    <h3>Mordern House</h3>
                                    <p>Attuvampatti, Kodaikanal.</p>
                                </div>
                                <div className="fare">
                                    <h2> ₹ 10000</h2>
                                    <p>/night</p>
                                </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default listingPart;