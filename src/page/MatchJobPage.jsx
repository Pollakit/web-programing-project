import React from 'react';
import Header from '../component/Header.jsx';
import GreyBar from '../component/GreyBar.jsx';
import CompanyCard from '../component/CompanyCard.jsx';
import UseIcon from '../image/user.png';

import "./index.css";

function MatchJobPage(){

    return(
        <div>
            <Header text ={"Login"} isDisplaySignUp={ false } isDisplayRightButton={ false }/>

            <GreyBar>
                <img  src={  UseIcon } style={{ height: '50px', marginLeft: '0.5%'}}/>
            </GreyBar>
            
            <div className="MatchJobContainer">

                <div style={{ width: '90%', height: '10px', marginTop: '-450px',marginLeft: '25px'}}> 
                        <CompanyCard
                            height = {'65px'}
                            width = {'100px'}
                            jobTitle = {'Assoiate Business Analyst'}
                            company = {'Shopee'}
                            location = {'Bangkok, Bangkok city Thailand'}
                        />
                </div>


            </div>

                
        </div>
    );
}

export default MatchJobPage;