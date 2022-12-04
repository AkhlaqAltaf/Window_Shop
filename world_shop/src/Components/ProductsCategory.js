import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {IoBusinessSharp } from 'react-icons/io';
import "../StyleSheets/ProductsCategory.css";
function ProductsCategory() {


   


  const mobiles = ["Mobile Phones", "Accessories", "Smart Watches", "Tablets"];


  const vehicles =

    [
      "Cars", "Cars Accessories", "Spare Parsts", "Busses Vans & Trucks",
      "Rickhshaw & Chingchi", "Tracters & Trali", "Cars On Installements",
      "Other Vehicles"
    ];
    const [Category,setCat]=useState("Category");
    const SelectedCategory=(name)=>{
              setCat(name)
    }
  return (
    <div >

      <div class="dropdown">
        <p class="dropbtn">{Category}</p>
        <div class="dropdown-content">

        <div id="dropdown-content">

          {
            mobiles.map((mobiles) =>
            (
              
                <Link ><div id="data" onClick={()=>SelectedCategory(mobiles)} >
                  {mobiles}

                </div>
                </Link>

            
            ))


          }
  </div>
  <div id="dropdown-content">
          {

            vehicles.map((vehicles) => (

            
                <Link >

                  <div id="data" onClick={()=>SelectedCategory(vehicles)}>
                    {vehicles}
                  </div>
                </Link>
            
            ))
          }

</div>


   

        </div>
      </div>


    </div>
  );
}

export default ProductsCategory;