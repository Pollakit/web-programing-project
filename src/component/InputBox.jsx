import React from 'react';
import "./Index.css"

function InputBox( props ){

    const { name,  idName, marginLeft } = props
    return(
        <div style={{ display:'flex'}}> 

            <h1>{ name }</h1>

            <input style={{ marginTop: '3%', marginLeft: marginLeft  }} 
                   className="input" 
                   name= {idName}
            />
        </div>
    );
}

export default InputBox;