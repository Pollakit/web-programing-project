import React, { Component } from 'react';
import Header from '../component/Header.jsx'
import ButtonWithIcon from '../component/ButtonWithIcon.jsx'
import search_logo from '../image/search.png'
import GreyBar from '../component/GreyBar.jsx'

class UserPage extends Component {
  render() {

    return (
        <React.Fragment>
          <Header text ={""} isDisplaySignUp={false} isDisplayRightButton={false}/>
          <div>
            <GreyBar>
              <ButtonWithIcon text={"find job"} imageUrl={search_logo}></ButtonWithIcon>
            </GreyBar>
          </div>
        </React.Fragment>
    );
  }

}

export default UserPage;