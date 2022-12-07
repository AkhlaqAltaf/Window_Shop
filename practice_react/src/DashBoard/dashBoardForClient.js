
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowDetail from "../Actions/actionAtCard";
import Display from "./display";

function Cards(Name, Detail, imgSource) {


  const element=[];
  

for (let i = 0; i < Name.length; i++) {
  
 element[i]= {name:Name[i],img:imgSource[i],detail:Detail[i],indx:i};

}


  const [data, setData] = useState(
  element
     );

     const [press,isPressed]=useState(false); 

     const [index,setIndex]=useState("");
 const getIndex=(ind)=>{
  
  {
   Display(ind)   
  }
  
 
 
 }

  return (
    <div  style={{
      marginTop:"50px",
    }}>
      
      {
        data.map((src) =>
        (
          <div class="card" 
          style={{
            padding: "20px",
            width: "25rem",
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
            marginTop: "20px",
            boxShadow: '1px 2px 9px #F4AAB9 inset',
            opacity: 0.9,
          }} >
           <img src={src.img} class="card-img-top" alt="Nothing Here" />
            <div class="card-body">
              <h4>
                {src.name}
              </h4>
              <p class="card-text">{src.detail}</p>

                 <Link to="display">
                 <button onClick={()=>(
                getIndex(src.detail),
                isPressed(true)
                )}
                style={{
                  marginBottom: "-12px",
                  backgroundColor: "rgb(73, 183, 143)",
                  border: "none",
                  boxShadow: '3px 3px 5px 6px #ccc',
                }}>

                {src.indx}
               
                </button>
                 </Link>
              
             </div>
           </div>
        ))
      }
    </div>
  );
}

export default Cards;