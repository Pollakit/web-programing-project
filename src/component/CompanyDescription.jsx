import React from 'react';
import "./Index.css";

function CompanyDesciption( props ){
    
    const { detail } = props

    return(
        <div>
            
            <div className="BackGroundColourCompanyDescription">

                <h1 >Description</h1>
                 
                <p>{ detail }</p>

                { props.children }
                   
            </div>
        </div>
    );
}

export default CompanyDesciption;