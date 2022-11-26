import { useState } from "react";
import { useLocation } from "react-router-dom";

function LoginData() {
    const location = useLocation();
    const data = location.state?.data;

const mail=data?data.authMail:"";
    const [isAdmin ,setAdmin]=useState(false);





    

    if (mail=="Akhlaq") {
        

       return <h3 style={{
        marginTop:"10vh",
        backgroundColor:"red"
       }}>
        True
       </h3>
    }   

    else{

        return  <h3 style={{
            marginTop:"10vh",
            backgroundColor:"red"
           }}>
            false
           </h3>
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