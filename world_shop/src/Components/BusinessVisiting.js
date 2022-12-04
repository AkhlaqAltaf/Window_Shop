import { useLocation } from "react-router-dom";
import "../StyleSheets/BusinessVisiting.css";
function BusinessVisiting() {
    
    const location=useLocation();
    const data=location.state?.data;
    
    return ( 

       <div id="mainDetail" style={{

         marginTop:"5%",
       }}>


         <div  style={{

        
         }}>

<h1>
{data?data.businessName:""}
</h1>
          <p>
            {data?data.description:""}
          </p>
         </div>

         <div  style={{

            width:"100%",
            height:"200px",
         }}>
         <img  src={data?data.profilePhoto:""} style={{

          width:"100%",
          height:"80vh",
          borderRadius:"100px",
            
            
         }}/>
         

         </div>


         <div>





         </div>
        

         <div  id="buton">



<button class="cybr-btn"  style={{
position:"absolute",
zIndex:"99"
 
}}>
Vsiit Products<span aria-hidden>_</span>
<span aria-hidden class="cybr-btn__glitch"> Buy</span>
<span aria-hidden class="cybr-btn__tag">{data?data.businessName:""}</span>
</button>

</div>
       </div>
        
     );
}

export default BusinessVisiting;