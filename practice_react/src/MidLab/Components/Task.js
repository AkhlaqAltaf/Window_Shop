import "../Styles/Task.css";
import {Link} from "react-router-dom";
import {IoMdNotifications} from "react-icons/io";
import {MdDarkMode} from "react-icons/md";
import {CgLayoutGridSmall} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai";
import LeftSideBar from "./LeftSideBar";
import Middle from "./Middle.js";
import RightBar from "./RightBar.js";
import LoginData from "./Login/LoginData";
import NavBar from "./NavBar";
import Footer from "./Footer";
 function Task() {
    return ( 
    <div id="main">

        <div >
           
           <NavBar/>
           

        </div>

        <div id="middle" className="row">
           <div id="left" className="col-2">
           <LoginData/>
           </div>

           <div id="middleSec" className="col-8">
                 <Middle/>
           </div>
           
           
           <div id="right" className="col-2 ">
              
           </div>
        </div>

        <div id="footer">    
     <Footer/>
        </div>
    </div>











     );
}

export default Task;