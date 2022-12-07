import {useState} from "react";
import Time from "./Time";

function Second() {
    const [second,setSecond]=useState("45");

    
    return ( 
   <Time second={second}/>

     );
}

export default Second;