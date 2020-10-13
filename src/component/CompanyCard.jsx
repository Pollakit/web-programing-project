import React from 'react';
import "./Index.css";

function CompanyCard( props ){
    
    const { logo , height, width, jobTitle, company, location} = props

    return(
        <div>
            
            <div className="BackGroundColourCompanyCard">

                <img  src={  logo } style={{ height: height, width: width, marginTop: '7px', marginLeft: '10px'}}/>

                <div className="RightCompanyCard">

                    <h1 >{jobTitle}</h1>

                    <h2>{company}</h2>

                    <h3>{ location }</h3>

                    { props.children }
                </div>
                   
            </div>
        </div>
    );
}

export default CompanyCard;