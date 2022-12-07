import { useState } from "react";
import { useLocation } from "react-router-dom";
import RightBar from "../RightBar";

function LoginData() {
    const location = useLocation();
    const data = location.state?.data;

const mail=data?data.authMail:"";
    const [isAdmin ,setAdmin]=useState(false);





    

    if (mail=="Akhlaq") {
        

       return <RightBar admin={true}/>
    }   

    else{

        return  <RightBar admin={false}/>
          
    }


    // return (


    //     <div style={{
    //         backgroundColor: 'red',
    //         marginTop: '20vh',
    //     }}>

    //         <h4>
    //             {/* {isAdmin} */}
    //         </h4>
    //         <h1>
    //             {data ? data.authMail : ""}
    //         </h1>


    //         <h3>

    //         </h3>
    //         {data ? data.authPass : ""}


    //     </div>


    // );
}

export default LoginData;