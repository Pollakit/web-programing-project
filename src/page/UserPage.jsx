import React, { Component } from 'react';
import Header from '../component/Header.jsx'
import ButtonWithIcon from '../component/ButtonWithIcon.jsx'
import search_logo from '../image/search.png'

class UserPage extends Component {
  render() {

    return (
        <React.Fragment>
          <Header text ={""} isDisplaySignUp={false} isDisplayRightButton={false}/>
          <div>
            <span class = "bar">
              {/* <span id = "findJob" class = "debug">
                <img src = {search_logo} id = "searchLogo" width = "35" height = "35"></img>
              </span>
              <span>
                <p class = "Standard-font-style" id = "findJobText">find job</p>
              </span> */}
              <ButtonWithIcon text={"find job"} imageUrl={search_logo}>
                HelloTest.
              </ButtonWithIcon>
            </span>
          </div>
        </React.Fragment>
    );
  }

}

export default UserPage;