import React, { Component } from 'react';

class ProfileContainer extends Component {
  render() {
    const {upper} = this.props;
    let class_name = (upper ? 'upper': 'lower');

    return (
        <div className={"profile-container " + class_name + " bottom-margin"}>
            {this.props.children}
        </div>
    );
  }

}

export default ProfileContainer;
