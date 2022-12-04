import { useState } from "react";
import { useLocation } from "react-router-dom";

function OwnerBusiness(prop) {
   
    // {businessID:1,email:"",password:"",profilePhoto:"/Images/Business/FashionS.jpg",ownerPhoto:"./Images/Owners/men2.jpg",ownerName:"Faiz Ullah",phone:"03317782810", 
    // businessName:"Fashion House Shoping mall",category:"Casmetics",fullAdress:"Abbottabad Mandyan Ner Ali Plaza",
    //     city:"",state:"",description:"Here All Fashion Mall Categories Are Available"},
   

    const location = useLocation();
    const data = location.state?.data;

var mail=data?data.authPass:0;
   



  
const businessID=mail;
       

       
 

    return ( 
        <div id="mainDiv">
  
          

                <div id="profile">
                 <section id="profilePhoto">
                  <img src={prop.business[businessID].profilePhoto} id="businessPhoto"/>
                  <img src={prop.business[businessID].ownerPhoto} id="ownerPhoto"/>

                 </section>

                 <section id="detail">
                 
                      {mail}
                 </section>

                    </div>
            
          
        </div>
       );
  
}

export default OwnerBusiness;