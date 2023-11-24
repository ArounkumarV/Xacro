import React, { Component } from 'react';
import "./footer.scss"

class footer extends Component {
    render() {
        return (
            <div>
                <footer className='fixed-footer'>
                <div className="container">
                    <div className="flex-group-one">
                        <div className="sub">
                            <h1>Subscribe us for <br />more info & discount</h1>
                        </div>
                        <div className="s-button">
                        {/*<button className='email'> Enter your email address </button>*/}
                        <input type="text" className='email' placeholder='Enter your email address'/>
                        <button className='start'>Get Started</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex-group-two">
                        <div className="content-one">
                            <h2>XACRO</h2>
                            <p>Sometimes features require a short description. This <br />can be detailed description or just a short text.</p>
                        </div>
                        <div className="content-two">
                           <table>
                            <tr>
                                <th>Company</th>
                                <th>Services</th>
                                <th>Recourses</th>
                            </tr>
                            <tr>
                                <td>About Us </td>
                                <td>Booking</td>
                                <td>Help Center</td>
                            </tr>
                            <tr>
                                <td>Testimonial</td>
                                <td>Support Center</td>
                                <td>Guide</td>
                            </tr>
                            <tr>
                                <td>Term of services</td>
                                <td>Blog</td>
                                <td>Patner Networks</td>
                            </tr>
                            <tr>
                                <td>Privacy Policy</td>
                                <td>Review</td>
                                <td>FAQ's</td>
                            </tr>
                            <tr>
                                <td>Investor</td>
                                <td>Room</td>
                                <td>Documentation</td>
                            </tr>
                           </table>
                        </div>
                    </div>
                    </div>
                    
                </footer>
            </div>
        );
    }
}

export default footer;