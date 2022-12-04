import { useState } from "react";
import { useLocation } from "react-router-dom";

function LoginControl() {
    const location = useLocation();
    const data = location.state?.data;

const mail=data?data.authMail:"";
    const [isAdmin ,setAdmin]=useState(false);





    

    if (mail=="Akhlaq") {
        

       return <h3 style={{
        marginTop:"10vh",
        backgroundColor:"red"
       }}>
        {mail}
        True
       </h3>
    }   

    else{

        return  <h3 style={{
            marginTop:"10vh",
            backgroundColor:"red"
           }}>
            {mail}
            false
           </h3>
    }


  
}

export default LoginControl;