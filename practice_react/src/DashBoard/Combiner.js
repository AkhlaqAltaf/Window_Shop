
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "./dashBoardForClient";
import "./grid.css";
import SetProduct from "./setProduct";

function Combiner() {
const location =useLocation();
const data=location.state?.product;

const name="Akhlaq";
var [product,setProduct]=useState(
  {

  names:["Camera","Head Phone","Loshan",+data?data.name:" "],
  images: ["./img/camera.jpg", "./img/hPhones.jpg", "./img/loshan.jpg"],
  descrpt:[
    "Camera has 2GB Storage , Black Color,",
    "Very Atractfull head Phones , Black Color ",
    "Here is loshan for smoth skin"
    
      ],
 
 }
 );



  const Update=()=>{
   product.names.concat(data?data.name:" ")
  }
  
    
  return (
  <div style={{
    marginTop:"60px"
  }}> 
  <SetProduct/>
  {data?data.name:" "}
    <button onClick={Update}>
      Update
    </button>
    {product.names}
    {
      Cards(product.names,product.descrpt,product.images)
    }   
   
    
    
    </div>

  );
  }

export default Combiner;