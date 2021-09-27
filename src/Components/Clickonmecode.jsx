import React, { useState } from "react";
 
function Clickonmecode( ){

    const[ number , setNumber] = useState(20);

    return(
        <>
        <p>{number}</p>
        <button onClick={function() {
            setNumber(number+1)
        }}>Click me</button>
        </>
    ); 
}
export default Clickonmecode;