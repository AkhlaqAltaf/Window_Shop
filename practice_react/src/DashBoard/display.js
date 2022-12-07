import { useLocation } from "react-router-dom";

function Display(detail) 
{

    const location =useLocation();

    console.log(detail , "  detail is here");

    console.log(location , "  Location is here");
    
    const data=location.state?.product;

    return ( 
        <div>
          hyyy

         <h1>{data?data.name:"here is data"}  </h1>
        </div>
     );
}

export default Display;