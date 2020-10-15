import React, { Component } from "react";
import Header from "../../component/Header.jsx";
import ButtonWithIcon from "../../component/ButtonWithIcon.jsx";
import GreyBar from "../../component/GreyBar.jsx";
import ProfileContainer from "../../component/ProfileContainer.jsx";
import DynamicInput from "../../component/DynamicInput.jsx";
import user_image from "../../image/user.png";
import DynamicProfileContainer from "../../component/DynamicProfileContainer.jsx";
import CreatedProfileContainer from "../../component/CreatedProfileContainer.jsx";
import "./CreatedJobPage.css";

class CreatedJobPage extends Component {
  render() {

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
           
          </GreyBar>
        </div>
         
        <DynamicProfileContainer>
          <a href="./editjobPage" style={{color:"black"}}>
            <CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/>
          </a>
          <CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/><CreatedProfileContainer imageUrl={user_image} position={"Associate Business Analyst"}
                                    company={"Shopee"} location={"Bangkok, Bangkok city Thailand"}/>
          
        </DynamicProfileContainer>
      </React.Fragment>
    );
  }
}

export default CreatedJobPage;
