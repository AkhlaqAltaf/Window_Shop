import { useLocation } from "react-router-dom";
import "../StyleSheets/ProductVisiting.css";
function ProductVisiting() {
   

    const location=useLocation();
    const data=location.state?.data;
   
   
    return ( 

        <div  style={{

   marginTop:"4%",
   

        }}>

          <div>

            <img src={data?data.frontImage:""}  style={

                {

                    width:"40%",
                    height:"50vh"
                }
            }/>
          </div>
       

       <section style={{
  

       }}>

        <h1>

            {
                data?data.name:""
            }
        </h1>

        <h5>
            {data?data.importants:""}
        </h5>

        <p>
            {data?data.Descrition:""}
        </p>

       </section>


       <div  id="buton">



       <button class="cybr-btn"  style={{

        
       }}>
  Buy<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch"> Buy</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
<button class="cybr-btn">
<span aria-hidden>Visit Business</span>
  <span aria-hidden class="cybr-btn__glitch">Visit Business</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
       </div>

       <section  style={
        {
display:'flex',
overflow:"scroll"

        }
       }>
        <div  style={
            {
                width:"30%",
                height:"40vh",
                backgroundColor:"black"

            }
        }>
         
         

         </div>
                 


        <div  style={
            {
                width:"30%",
                height:"40vh",
                backgroundColor:"brown",


                
            }
        }>

        </div>  

        <div  style={
            {
                width:"30%",
                height:"40vh",
                backgroundColor:"blue"
                
            }
        }>

        </div>

        <div  style={
            {
                width:"30%",
                height:"40vh",
                backgroundColor:"aqua"
                
            }
        }>


        </div>

        <div  style={
            {
                width:"30%",
                height:"40vh",

                backgroundColor:"skyblue"
                
            }
        }>


        </div>
       </section>


        </div>
     );
}

export default ProductVisiting;