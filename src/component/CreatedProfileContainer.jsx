import React, { Component } from 'react';
import Button from './Button.jsx';

class CreatedProfileContainer extends Component {
    state = {  }
    render() {
        const { imageUrl, position, company, location} = this.props;

        return (
            <div className="created-job-container">
                <span className="image-container">
                    <img src={imageUrl} width="35" height = "35" />
                </span>
                <span className="job-information">
                    <p>{position}</p>
                    <p>{company}</p>
                    <p>{location}</p>
                    <Button name="remove" size={[45, 200]} textSize={35} />
                </span>
            </div>
        );
    }
}
 
export default CreatedProfileContainer;