
import { Routes, Route } from "react-router-dom";

import Logins from "./Login/login";
import NavBar from "./NavBar/navbar";
import BusinessForm from "./owner/business";
import "./App.css";

import RegisterBusiness from "./Dummy-Data/RegisterBusiness";
import Items from "./Dummy-Data/Items";

import Cards from "./Dummy-Data/components/Cards";
import LoginData from "./Login/LoginData";
import Visiting from "./Dummy-Data/Visit";
import Details from "./Dummy-Data/Detail";
import {useLocation} from "react-router-dom";
import {useState} from "react";
function Application() {




  const location = useLocation();
    const data = location.state?.data;

const mail=data?data.authMail:"";
const pass=data?data.authPass:"";

    const [isAdmin ,setAdmin]=useState(false);





    
 
    const Admin=()=>{

    
    if (mail=="Akhlaq"&&pass=="ak") {
        

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
   <NavBar/>

{/* <Admin/> */}
   <Routes >
   <Route path="/" element={<Items/>}/>
   
   <Route path="/business" element={<RegisterBusiness/>}/>
   <Route path="/login" element={<Logins/>}/>
   <Route path="/addbusiness" element={<BusinessForm/>}/>

   <Route path="/details" element={<Details/>}/>
 <Route path="/visit" element={<Visiting/>}/>
   
   
   </Routes>     
   </div>
  );

}
export default Application;






