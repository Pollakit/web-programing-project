import React, { Component } from 'react';
import Header from '../component/Header.jsx'
import ButtonWithIcon from '../component/ButtonWithIcon.jsx'
import search_logo from '../image/search.png'
import GreyBar from '../component/GreyBar.jsx'
import share_image from '../image/share-post.png'
import ProfileContainer from '../component/ProfileContainer.jsx'
import ResponsiveStandardButton from '../component/ResponsiveStandardButton.jsx'

class UserPage extends Component {
  render() {

    return (
        <React.Fragment>
          <Header text ={""} isDisplaySignUp={false} isDisplayRightButton={false}/>
          <div>
            <GreyBar>
              <ButtonWithIcon text={"find job"} imageUrl={search_logo}></ButtonWithIcon>
              <ButtonWithIcon text={"appled"} imageUrl={share_image}></ButtonWithIcon>
            </GreyBar>
          </div>
          <h1 class="standard-font-style align-text-center temp-font-size">Profile</h1>
          <ProfileContainer upper={true}></ProfileContainer>
          <ProfileContainer upper={false}></ProfileContainer>
          <ResponsiveStandardButton text={"SAVE"}></ResponsiveStandardButton>
        </React.Fragment>
    );
  }

}

export default UserPage;