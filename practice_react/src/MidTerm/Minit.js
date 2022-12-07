import {useState} from "react";
import Time from "./Time";

function Minit() {
    const [minit,setMinit]=useState("55");

    
    return ( 
   <Time minit={minit}/>

     );
}

export default Minit;