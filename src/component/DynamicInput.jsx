import React, { Component } from 'react';

class DynamicInput extends Component {
    state = { 
        tagNumber: 0,
    }
    render() {
        const { tag } = this.props;
        const tags = [];

        let trimmedTag = tag.split(' ').join('');

        return ( 
            <React.Fragment>
                <div className="dynamic-input-container-parent">
                    <label>{tag}</label>
                        <div className="dynamic-input-container">
                            <button className="addButton">+</button>
                        </div>
                </div>
                <div className="vertical-spacer"></div>
            </React.Fragment>
        );
    }
}
 
export default DynamicInput;