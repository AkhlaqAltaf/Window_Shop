import "../Styles/LeftSide.css";

import { useState } from "react";
import {FaGreaterThan} from "react-icons/fa";
import { Link } from "react-router-dom";
function LeftSideBar() {
    
    const [link,setLink]=useState([


        {title:"Quick Links",links:["T20 Time Out","Fantasy Pick","ICC Rankings"]},
        {title:"ESPNcricinfo Apps",links:["Android App","ios App",]},
        {title:"Follow ESPNcricinfo",links:["Instagam","Twitter","Facebook","YouTube"]},
        {title:"ESPN Sites",links:["The Cricket Monthly","ESPN"]},

    ]);
    
    return ( 

        <div id="main">
          
          {
             link.map((ref)=>(

                <div id="cards">
                  <h6 id="title">
                    {ref.title}
                  </h6>
                      <div id="links">

                        {
                            ref.links.map((L)=>(

                           <Link id="LINK">    <p id="linkP">
                                    <FaGreaterThan id="arrow"/> {L}
                                </p>
                                </Link> 
                            ))
                        }

                        </div>
                    </div>
             ))
          }
        </div>
     );
}

export default LeftSideBar;