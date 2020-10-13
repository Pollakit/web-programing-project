import React from 'react';
import Header from '../component/Header.jsx';
import GreyBar from '../component/GreyBar.jsx';
import CompanyCard from '../component/CompanyCard.jsx';
import "./index.css";

function MatchJobPage(){

    return(
        <div>
            <Header text ={"Login"} isDisplaySignUp={ false } isDisplayRightButton={ false }/>

            <GreyBar></GreyBar>

            <div>

            </div>
        </div>
    );
}

export default MatchJobPage;