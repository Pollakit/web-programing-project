import React from 'react';
import "./Index.css";

function CompanyCard2( props ){
    
    const { logo , height, width, jobTitle, company, location} = props

    return(
        <div>
            
            <div className="BackGroundColourCompanyCard2">

                <img  src={  logo } style={{ height: height, width: width, marginTop: '7px', marginLeft: '10px'}}/>

                <h1 >{jobTitle}</h1>

                <h2>{company}</h2>

                <h3>{ location }</h3>

                { props.children }
                   
            </div>
        </div>
    );
}

export default CompanyCard2;