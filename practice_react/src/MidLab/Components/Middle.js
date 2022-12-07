import { useState } from "react";
import "../Styles/Middle.css";
function Middle() {
   const [ads,setAds]=useState([

    {Id:1,title:"PAKISTAN NEWS",fImage:"./img2/Fawad.jpg",
    head:"Abrar Ahmed, Mohammad Ali get maiden"+ 
    "call-ups for England Tests;" 
    +"Fawad, Hassan, Yasir Dropped",
    descript:"Shaheen Shah Afridi is not fit and available for selection yet",
    secondAd:{sImage:"./img2/Shaheen.webp",head:"Shaheen 'Feeling better' after undergoing appendectomy ",
    descript:"He is Also currently undergoing a "}},


    {Id:2,title:"AUSTRALIA NEWS",fImage:"./img2/Warner.jpg",
    head:"Abrar Ahmed, Mohammad Ali get maiden"+ 
    "call-ups for England Tests;" 
    +"Fawad, Hassan, Yasir Dropped",
    descript:"Shaheen Shah Afridi is not fit and available for selection yet",
    secondAd:{sImage:"./img2/Warner2.jpg",head:"Shaheen 'Feeling better' after undergoing appendectomy ",
    descript:"He is Also currently undergoing a two-week rehab for his knee injury"}},

    {Id:3,title:"PAKISTAN NEWS",fImage:"./img2/Fawad.jpg",
    head:"Abrar Ahmed, Mohammad Ali get maiden"+ 
    "call-ups for England Tests;" 
    +"Fawad, Hassan, Yasir Dropped",
    descript:"Shaheen Shah Afridi is not fit and available for selection yet",
    secondAd:{sImage:"./img2/Shaheen.webp",head:"Shaheen 'Feeling better' after undergoing appendectomy ",
    descript:"He is Also currently undergoing a "}},


    {Id:4,title:"AUSTRALIA NEWS",fImage:"./img2/Warner.jpg",
    head:"Abrar Ahmed, Mohammad Ali get maiden"+ 
    "call-ups for England Tests;" 
    +"Fawad, Hassan, Yasir Dropped",
    descript:"Shaheen Shah Afridi is not fit and available for selection yet",
    secondAd:{sImage:"./img2/Warner2.jpg",head:"Shaheen 'Feeling better' after undergoing appendectomy ",
    descript:"He is Also currently undergoing a two-week rehab for his knee injury"}}
   ])
   

   const Delete=(del)=>{


    setAds(ads.filter((r)=>(

      r.Id!==del
    )))

   }
   
    return ( 
        <div id="mainMiddle">


            {

                ads.map((ref)=>(
                    <div id="ads">
                      
                      <section id="ads1">

                       <div  id="news">
                        <h6>
                            {ref.title}
                        </h6>
                        </div>
                           
                      <div >
                          <img src={ref.fImage} id="image1" />
                      </div>



                      <div id="descript1">

                      <h6>
                        {ref.head}
                        </h6>


                        <p>
                            {ref.descript}
                        </p>

                        
                      </div>
                        
                      </section>
                          <button  onClick={()=>Delete(ref.Id)}>

                            Delete
                          </button>




                      {/* <div id="ads2" className="row">


                      
                       <img src={ref.secondAd.sImage} id="image2" className="col-4"/>
                      




                       <div id="descript2" className="col-6">
                          
                          <h6>
                            {ref.secondAd.head}
                          </h6>

                          <p>
                            {ref.secondAd.descript}
                          </p>

                       

                         </div>
                      </div> */}
                   
                   </div>
                ))
            }
        </div>
        
     );
}

export default Middle;