import React, { Component } from 'react';

class DynamicProfileContainer extends Component {
  render() {

    return (
        <div className={"dynamic-profile-container bottom-margin"}>
            {this.props.children}
        <div className="vertical-spacer"></div>
        </div>
    );
  }

}

export default DynamicProfileContainer;
