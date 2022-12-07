import { useState } from "react";
import Hour from "./Hour";

const Time=()=> {


    const styles={
        color:"white",
    }

    const [country,setCountry]=useState([
        {name:"Pakistan",time:"02"},
        {name:"London",time:"2:30"},
        {name:"America",time:"3"},
        {name:"USA",time:"04"},
    ])


    const Delete=(count)=>{


        setCountry(
     country.filter((ref)=>(
    ref.name!==count)
     )
                )

             }
    return ( 

        <div>

          
  {
   country.map((T)=>
   
   (

   
   <div style={ {
    

    backgroundColor:"green",
    marginTop:"30px",

   }}>

    <h3  style={styles}>
        {T.name}
    </h3>
    <h4>
        {T.time}
    </h4>

   <button onClick={()=>Delete(T.country)}>
    Delete
   </button>
    </div>
     
   
    )
   
   )
   }
        </div>
     );
}

export default Time;