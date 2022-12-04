import OwnerBusiness from "./OwnersBusiness";
import { useState } from "react";
function BusinessControl() {
  
    const [business,setBusiness]=useState([

        {businessID:1,email:"",password:"",profilePhoto:"/Images/Business/FashionS.jpg",ownerPhoto:"./Images/Owners/men2.jpg",ownerName:"Faiz Ullah",phone:"03317782810", 
        businessName:"Fashion House Shoping mall",category:"Casmetics",fullAdress:"Abbottabad Mandyan Ner Ali Plaza",
            city:"",state:"",description:"Here All Fashion Mall Categories Are Available"},
    
            {businessID:2,email:"",password:"",profilePhoto:"/Images/Business/MenAttitude.jpg",ownerPhoto:"./Images/Owners/men1.jpg",ownerName:"Muhammad Ali",phone:"03317782810",
             businessName:"Attitude Shoping Mall",category:"Casmatics",fullAdress:"Havelyan",
            city:"",state:"",description:"I Our Shoping Mall Every Thing Available Due That A men Look like hero"},
             
            {businessID:3,email:"",password:"",profilePhoto:"/Images/Business/LaptopShop.jpg",ownerPhoto:"./Images/Owners/men3.jpg",ownerName:"Shabir Hussain",phone:"03317782810", 
        businessName:"SQL Laptop House",category:"Laptop",fullAdress:"Karachi Main City",
                city:"",state:"",description:"We have laptops, Hard discs,Rams,Laptop charger, and many"},
    
                {businessID:4,email:"",password:"",profilePhoto:"/Images/Business/MobileShop.jpg",ownerPhoto:"./Images/Owners/men4.jpg",ownerName:"Sahil Khan",phone:"03317782810",
                 businessName:"TC Mobile Shop ",category:"Mobile",fullAdress:"Chak Shehzad Islamabad",
                city:"",state:"",description:"I Our Shoping Mall Every Thing Available Due That A men Look like hero"},
    
              
            {businessID:5,email:"",password:"",profilePhoto:"/Images/Business/Service.jpg",ownerPhoto:"./Images/Owners/men5.jpg",ownerName:"Tanveer Ahmad",phone:"03317782810", 
            businessName:"Servic Shoe",category:"Laptop",fullAdress:"Abbottabad Havelyan Near Stylo",
                    city:"",state:"",description:"We have laptops, Hard discs,Rams,Laptop charger, and many"},
        
                    {businessID:6,email:"",password:"",profilePhoto:"/Images/Business/TFT-Lcds.jpg",ownerPhoto:"./Images/Owners/men6.jpg",ownerName:"Asher Alam",phone:"03317782810",
                     businessName:"TFT Lcds ",category:"Mobile",fullAdress:"Trafic Chock Jampur Rajanpur",
                    city:"",state:"",description:"I Our Shoping Mall Every Thing Available Due That A men Look like hero"},
    
        ]);
  
  
    return ( 


        <OwnerBusiness business={business}/>
     );
}

export default BusinessControl;