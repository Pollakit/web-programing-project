import React from 'react';
import "./Index.css";

function CompanyCard3( props ){
    const { logo, type, company, location} = props 

    return(
        <div style={{ display:'flex', width: '50%', height: '60%', padding:"10px", borderRadius: '15px'}}>
            <img  src={  logo } style={{ height: '75%', width: '30%', marginTop: '4px', marginRight: '12px', padding:'10px'}}/>
            
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '13px'}}>  
                    <span >{ type  }</span>
                    <span>{ company }</span>
                    <span>{ location }</span>
            </div>
        </div>
    );
}

export default CompanyCard3;