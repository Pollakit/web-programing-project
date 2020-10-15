import React from 'react';
import Header from '../component/Header.jsx';
import GreyBar from '../component/GreyBar.jsx';
import ButtonWithIcon from '../component/ButtonWithIcon.jsx';
import Button from '../component/Button.jsx';
import ProfileContainer from "../component/ProfileContainer.jsx";
import DynamicInput from "../component/DynamicInput.jsx";

import Search from '../image/search.png';
import SharePost from '../image/share-post.png';
import InputBox from '../component/InputBox';

import "./index.css";

function UserPage(){
    let jobDetails = {
        inputLists: [
          { inputName: "UserName", inputType: "text" },
          { inputName: "email", inputType: "text" },
          { inputName: "password", inputType: "text" },
        ]
      };

    return(
        <div>
            <Header text ={"Login"} isDisplaySignUp={ false } isDisplayRightButton={ false }/>

            <GreyBar>
                <a href="./findJobPage">
                    <ButtonWithIcon
                        text={"find job"}
                        imageUrl={Search}
                    ></ButtonWithIcon>
                </a>

                <a href="./matchJobPage">
                    <ButtonWithIcon
                        text={"matched job"}
                        imageUrl={SharePost}
                    ></ButtonWithIcon>
                </a>
            </GreyBar>

            <div className="UserPageHeaderTextStyle">
                <h1>Profile</h1>
            </div>

            <div className="UserPageContainer">
                <InputBox name={"Username:"} idName={'userNameinput'} marginLeft={"3%"}/>
                <InputBox name={"Email:"} idName={'emailInput'} marginLeft={"11%"}/>
                <InputBox name={"Password:"} idName={'passwordInput'} marginLeft={"4%"}/>
                
                <DynamicInput tag={"Tag"}/>
                
            </div>

            <div className="UserPageButtonContainer">
                <Button name={ "save" } size={[60,700]} textSize={25} />
            </div>
                
        </div>
    );
}

export default UserPage;