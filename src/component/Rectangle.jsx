import React  from "react";


function Rectangle( props ){
    const { width, height, backgroundColour, topMar} = props

    return(
        <div style={{ width: width, height: height ,background: backgroundColour, marginTop: topMar } }></div>
    );
}

export default Rectangle;