import React, { Component } from 'react';
import "./detailCard.scss";

class GoogleMap extends Component {
    render() {
        return (
            <div>
                <iframe width="254" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=254&amp;height=200&amp;hl=en&amp;q=Xacro%20Xperiences,%20Puliyoor%20Rd,%20Kodaikanal,%20Tamil%20Nadu%20624101+(Xacro%20Xperiences)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </div>
        );
    }
}

export default GoogleMap;   