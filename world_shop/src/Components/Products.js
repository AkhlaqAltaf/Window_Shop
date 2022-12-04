

import {useState} from "react";

import "../StyleSheets/Product.css";
import React from "react";

import {Link} from "react-router-dom";
import {FaLocationArrow} from "react-icons/fa";
import {BiPurchaseTag} from "react-icons/bi";
function Product(data) {
        


  const [items,setItems]=useState(
    [
        
  
    {itemID:1,businessID:1,category:"Bags",name:"Bag",
    frontImage:"Images/Products/Bags.jpg",
    price:"4000",importants:",Here Are WonderFull BAgs You Will Find device for recording an image of an object on a light-sensitive surface"
    ,Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
    +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
   }
,

   {itemID:1,businessID:1,category:"Camera",name:"HDD CAMERA 15px HD",
   frontImage:"Images/Products/Camera.jpg",
   price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
     +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
     +"Ram: 4GB DDR3 COLOR:Black",
     Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
     +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
    },
    {itemID:1,businessID:1,category:"Head Phones",name:"Head Phone",
    frontImage:"Images/Products/HeadPhones.jpg",
    price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
    +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
    +"Ram: 4GB DDR3 COLOR:Black",
    Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
    +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
   }
   ,
   {itemID:1,businessID:1,category:"Laptop",name:"Body Loshan",
   frontImage:"Images/Products/Loshan.jpg",
   price:"42000",
   importants:"Condetion: Slightly Used – 9/10 without box"
     +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900",
    //  +"Ram: 4GB DDR3 COLOR:Black",
     Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
     +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
    },
    {itemID:1,businessID:1,category:"Laptop",name:"Bata Shoe",
    frontImage:"Images/Products/Shoe.jpg",
    price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
    +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
    +"Ram: 4GB DDR3 COLOR:Black",
    Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
    +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
   }
,

{itemID:1,businessID:1,category:"Laptop",name:"Beauti Products",
frontImage:"Images/Products/BeautiProducts.jpg",
price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
     +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
     +"Ram: 4GB DDR3 COLOR:Black",
     Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
     +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
    },
    {itemID:1,businessID:1,category:"Laptop",name:"Ladies Hand Bag",
    
    frontImage:"Images/Products/LadiesBag.jpg",
    
    price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
    +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
    +"Ram: 4GB DDR3 COLOR:Black",
    Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
    +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
   }


    ]
    
    )

    return (  

        <div id="itemsBody">
    {
   
        items.map((ref)=>
        
        (
<div id="cards">

<div class="card-container">
  <div class="card u-clearfix">
    <div class="card-body">
      
      <img src={ref.frontImage} alt="" class="media" />
      <span class="card-author subtle">{ref.name}</span>
      <h2 class="card-title">{ref.price}/-</h2>
      <p class="card-description subtle">{ref.importants}</p>
      <div class="card-read">Read</div>

      <div id="buttons">
        <Link to="/ProductVisiting" id="location" state={{
          data:ref
        }}>
          {<FaLocationArrow/>} Visit
        </Link>
        <Link to="/Buy" id="buy">
         {<BiPurchaseTag/>} Buy
        </Link>

        </div>
      <span class="card-tag card-circle subtle">C</span>
    </div>
   
  </div>
  <div class="card-shadow"></div>
</div>
</div>
        )
           )
           }

           </div>
   
    )}

export default Product;