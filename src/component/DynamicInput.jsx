import React, { Component } from 'react';
import Input from './Input.jsx';

class DynamicInput extends Component {
    constructor(props) {
        super(props);
        const button = <button className="addButton" onClick={this.addTag.bind(this)}>+</button>;
        this.state = { 
            tags: [button],
        }
    }
    
    render() {
        const { tag } = this.props;
        let trimmedTag = tag.split(' ').join('');
        console.log("Rendered");

        return ( 
            <React.Fragment>
                <div className="dynamic-input-container-parent">
                    <label>{trimmedTag}</label>
                        <div className="dynamic-input-container">
                            {
                                this.state.tags.map((input, index) => (
                                    input
                                  ))
                            }
                        </div>
                </div>
                <div className="vertical-spacer"></div>
            </React.Fragment>
        );
    }

    addTag() {
        const input = (<Input />);
        
        this.setState((state) => {
            tags: state.tags.unshift(input);
        });

        this.forceUpdate(); // to be fixed later -> don't understand why setState doesn't rerender
                            // the component after the component's state(s) has changed
        
    }
}
 
export default DynamicInput;