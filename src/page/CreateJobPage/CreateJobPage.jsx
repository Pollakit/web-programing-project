import React, { Component } from "react";
import Header from "../../component/Header.jsx";
import ButtonWithIcon from "../../component/ButtonWithIcon.jsx";
import GreyBar from "../../component/GreyBar.jsx";
import ProfileContainer from "../../component/ProfileContainer.jsx";
import DynamicForm from "../../component/DynamicForm.jsx";
import DynamicInput from "../../component/DynamicInput.jsx";
import Button from "../../component/Button.jsx";
import share_image from "../../image/share-post.png";
import user_image from "../../image/user.png";
import Router from '../../routes/Router';
import { Link, NavLink } from 'react-router-dom';
import "./CreateJobPage.css";

class CreateJobPage extends Component {
  render() {
    let jobDetails = {
      inputLists: [
        { inputName: "Job title", inputType: "text" },
        { inputName: "Location", inputType: "text" },
        { inputName: "Telephone", inputType: "text" },
        { inputName: "Job Detail", inputType: "textarea" },
      ]
    };

    return (
      <React.Fragment>
        <Header
          text={""}
          isDisplaySignUp={false}
          isDisplayRightButton={false}
        />
        <div>
          <GreyBar>
            <a href="./company">
              <ButtonWithIcon
                text={"Profile"}
                imageUrl={user_image}
              ></ButtonWithIcon>
            </a>
            
            <a href="./createdjob">
              <ButtonWithIcon
                text={"Job posted"}
                imageUrl={share_image}
              ></ButtonWithIcon>
            </a>
          </GreyBar>
        </div>

        <h1 className="standard-font-style align-text-center temp-font-size">
          Create Job
        </h1>

        <ProfileContainer upper={true}>
          <DynamicForm inputs={jobDetails} />
        </ProfileContainer>

        <ProfileContainer upper={false}>
          <DynamicInput tag={"Tag"}/>
        </ProfileContainer>
        <div className="button-container">
          <Link to="/createdjob">
          <Button name="Create" size={[52, 435]} textSize={29}/>
          </Link>
          <Button name="Cancel" size={[52, 353]} textSize={29}/>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateJobPage;
