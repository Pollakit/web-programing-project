import React from 'react';
import Header from '../component/Header.jsx';
import GreyBar from '../component/GreyBar.jsx';
import CompanyCard3 from '../component/CompanyCard3.jsx';
import UseIcon from '../image/user.png';
import ButtonWithIcon from '../component/ButtonWithIcon.jsx'

import LineLogo from '../image/LineLogo.jpg';
import GoogleLogo from '../image/GoogleLogo.png';
import ShoppeeLogo from '../image/ShopeeLogo.png';

import "./index.css";

function MatchJobPage(){

    return(
        <div>
            <Header text ={"Login"} isDisplaySignUp={ false } isDisplayRightButton={ false }/>

            <GreyBar>
                <a href="./userPage">
                    <ButtonWithIcon
                        text={"profile"}
                        imageUrl={UseIcon}
                    ></ButtonWithIcon>
                </a>
            </GreyBar>
            
            <div className="MatchJobContainer">

                <div style={{ margin: '30px 50px 50px 50px', height: '100px', backgroundColor:'white' }}>
                    <a href="https://careers.shopee.co.th/jobs/" target="_blank" style={{color:"black"}}>
                        <CompanyCard3
                            logo = { ShoppeeLogo }
                            type = { 'AssoiateBusinessAnalyst' } 
                            company = { 'Shopee' }
                            location = { 'Bangkok,BangkokcityThailand' }
                        />
                    </a>
                </div>

                <div style={{ margin: '-30px 50px 50px 50px', height: '100px', backgroundColor:'white' }}>
                        <a href="https://career.linecorp.com/linecorp/career/list" target="_blank" style={{color:"black"}}>
                            <CompanyCard3
                            logo = { LineLogo }
                            type = { 'AssoiateBusinessAnalyst' } 
                            company = { 'Line' }
                            location = { 'Bangkok,BangkokcityThailand' }
                        />
                        </a>
                </div>

                <div style={{ margin: '-30px 50px 50px 50px', height: '100px', backgroundColor:'white' }}>
                    <a href="https://careers.google.com/" target="_blank" style={{color:"black"}}>
                        <CompanyCard3
                            logo = { GoogleLogo }
                            type = { 'AssoiateBusinessAnalyst' } 
                            company = { 'Google' }
                            location = { 'Bangkok,BangkokcityThailand' }
                        />
                    </a>
                </div>

            </div>
                

                
        </div>
    );
}

export default MatchJobPage;