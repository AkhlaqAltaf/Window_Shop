import "../FormsStyle/AddProduct.css";

function AddProduct() {


//     {itemID:1,businessID:1,category:"Laptop",name:"Ladies Hand Bag",
    
//     frontImage:"Images/Products/LadiesBag.jpg",
    
//     price:"42000",importants:"Condetion: Slightly Used – 9/10 without box"
//     +"Screen:14.00 inchesActive Matrix TFT Color LCD 1600 x 900"
//     +"Ram: 4GB DDR3 COLOR:Black",
//     Descrition:"Bluetooth: v4.0+LE LAN Speed: 10/100/1000 Wireless/Wifi: 802.11b/g/n  "
//     +" Webcam: Yes HD Webcam 10 Days Checking Warranty by Usedeals.pk"
//    }



    return (  


            <div id="ProductForm">
            <div id="business">
            <label className="labels">
            Business ID
            </label>
            <input className="input" id="businessId" type={Number} placeholder="Enter Business Id" /> 
            </div>         
            <div id="product">
            <label className="labels">
            Product Name
            </label>
            <input className="input" id="productName" type={Text} placeholder="Product Name"/>
            <label className="labels">
            Price
            </label>
            <input className="input" id="price" type={Number} placeholder="Product Price"/>
            <label className="labels">
            Importants
            </label>
            <input className="input" id="importants" type={Text} placeholder="Product Importants"/>
            <label className="labels">
            Description
            </label>
           
            <textarea rows="4" cols="50" className="input" id="description"
            placeholder="Description Product">

            </textarea>
            </div>      
            </div>
    );
}

export default AddProduct;