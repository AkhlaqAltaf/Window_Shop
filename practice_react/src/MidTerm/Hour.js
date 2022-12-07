import { useState } from "react";
import Time from "./Time";

const Hour=()=> {
    
    const [hour,setHour]=useState("01");

    
    return ( 
   <Time hour={hour}/>

     );
}

export default Hour;