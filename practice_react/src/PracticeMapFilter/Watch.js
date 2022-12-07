import { useEffect, useState } from "react";



function Watch() {
   
   const [countryTime,setTime]=useState([


    {id:1,country:"Pakistan",time:"01"},
    {id:2,country:"London",time:"10"},
    {id:3,country:"Turkey",time:"06"},
    {id:4,country:"Europe",time:"07"}

   ]);
   
   

   const Delete=(country1)=>
{

    setTime(

       countryTime.filter((ref)=>
       (

        ref.country!==country1

        


        
       ))
      )

      useEffect(()=>{
        console.log("Deleted");
      },[Delete])
}

    return (  

<div>
        <div>

{


    countryTime.map((ref)=>
    
    
    (
   <form>

   

        <thead>
         
         <th>
            id
         </th>
         <th>
       Country
         </th>
         <th>
            Time
            </th>
            <th>
            Action
            </th>

        </thead>
    <tbody>


<tr>
    <td>
        {ref.id}
    </td>
    <td>
{ref.country}
    </td>
    <td>
        {ref.time}
    </td>
    <button  onClick={()=>Delete(ref.country)}>
        Delete
    </button>
</tr>

</tbody>

    
   </form>

    )
    
    )

    
}


        </div>

<div  style={{
  display:"flex",
  flexWrap:"wrap",


}}>
{


    countryTime.map((ref)=>
    (

        <div  style={
            {
                color:"white",
                backgroundColor:"green",
                width:"30vw",
                height:"200px",
                padding:"20px",
                marginTop:"30px",
                display:"flex",
                flexWrap:"wrap",
                marginLeft:"3%",

            }
        }>
        
 <h3>
    {ref.country}
 </h3>

 <p>
    {ref.time}
 </p>
            </div>
    )
    )
}
</div>
        </div>

    );
}

export default Watch;