import React, { Component } from "react";
import Header from "../../component/Header.jsx";
import ButtonWithIcon from "../../component/ButtonWithIcon.jsx";
import GreyBar from "../../component/GreyBar.jsx";
import share_image from "../../image/share-post.png";
import ProfileContainer from "../../component/ProfileContainer.jsx";
import ResponsiveStandardButton from "../../component/ResponsiveStandardButton.jsx";
import DynamicForm from "../../component/DynamicForm.jsx";
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

    let companyDescriptionField = {
      inputLists: [
        {
          inputName: "Company description",
          inputType: "textarea",
        },
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
            <ButtonWithIcon
              text={"job posted"}
              imageUrl={share_image}
            ></ButtonWithIcon>
          </GreyBar>
        </div>
        <h1 className="standard-font-style align-text-center temp-font-size">
          Company Profile
        </h1>
        <ProfileContainer upper={true}>
          <DynamicForm inputs={jobDetails}></DynamicForm>
        </ProfileContainer>
        <ProfileContainer upper={false}>
        <DynamicForm inputs={companyDescriptionField}></DynamicForm>
        </ProfileContainer>
        <ResponsiveStandardButton text={"SAVE"}></ResponsiveStandardButton>
      </React.Fragment>
    );
  }
}

export default CreateJobPage;
