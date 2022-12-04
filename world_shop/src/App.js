
import { Routes, Route } from "react-router-dom";


import BusinessForm from "./owner/business";
import "./StyleSheets/App.css";


import {useLocation} from "react-router-dom";
import {useState} from "react";

import Login from "./Components/Login";
import ProductVisiting from "./Components/ProductVisiting";
import BusinessVisiting from "./Components/BusinessVisiting";
import Navbar from "./Components/Navbar";
import Businesses from "./Components/Business";
import Product from "./Components/Products";
import AddProduct from "./Forms/AddProduct";
import BusinessControl from "./Components/YourBusiness";
import LoginControl from "./Components/LoginControl";


function Application() {




  const location = useLocation();
    const data = location.state?.data;

const mail=data?data.authMail:"";
const pass=data?data.authPass:"";

    const [isAdmin ,setAdmin]=useState(false);





    
 
    const Admin=()=>{

    
    if (mail==="Akhlaq"&&pass==="ak") {
        

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

  }



  return (

    <div id="body">
  <Navbar/>
 
   <Routes >
   <Route path="/" element={<Product/>}/>
   <Route path="/business" element={<Businesses/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/addbusiness" element={<BusinessForm/>}/>

   <Route path="/ProductVisiting" element={<ProductVisiting/>}/>
 <Route path="/BusinessVisiting" element={<BusinessVisiting/>}/>
   <Route path="product" element={<AddProduct/>}/>
   <Route path="yourbusiness" element={<BusinessControl/>}/>
   </Routes>     
   <LoginControl style={{marginTop:"30vh"}}/>

   {/* <Cards/> */}

   {/* <AddProduct/> */}
   </div>
  );

}
export default Application;






