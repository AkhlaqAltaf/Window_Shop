import {Link} from "react-router-dom";
import {IoMdNotifications} from "react-icons/io";
import {MdDarkMode} from "react-icons/md";
import {CgLayoutGridSmall} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai";
import "../Styles/NavBar.css";
function NavBar() {
    return (  

        <div>

<div id="menu" >
           
           <section >
             <img src="./img/logo.png" alt="No Image" id="logo"/>

           </section>

           <section id="buttons">


            <Link className="links">
               Live Scores
            </Link>

            <Link className="links">
               Series
            </Link>

            <Link className="links">
               Teams
            </Link>

            <Link className="links">
               News
            </Link>

            <Link className="links">
            Features
            </Link>
             
            <Link className="links">
              Videos
            </Link>


            <Link className="links" to="login">
              Login
            </Link>
           </section>

             

             <section id="icons">
               <p id="edition">
                Edition Pk
               </p>
                <MdDarkMode className="ic"/>
               <IoMdNotifications className="ic" />

               <CgLayoutGridSmall className="ic"/>
               <AiOutlineSearch className="ic"/>
               
             </section>
  </div>
        </div>
    );
}

export default NavBar;