import React, { Component } from 'react';
import Header from '../component/Header.jsx'

class UserPage extends Component {
  render() {

    return (
        <React.Fragment>
          <Header text ={""} isDisplaySignUp={false} isDisplayRightButton={false}/>
          <div>
            <span class = "bar">
              <span>
                
              </span>
            </span>
          </div>
        </React.Fragment>
    );
  }

}

export default UserPage;