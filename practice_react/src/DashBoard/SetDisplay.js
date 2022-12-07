import { useState } from "react";
import { Link } from "react-router-dom";

function SetDisplay() {
    const [data,setData]=useState({
        name:"Mudasir"
    });
    
    return ( 
        <div>

            <Link to="/go" state={{product:data}}>
            Link
            </Link>
        </div>
     );
}

export default SetDisplay;