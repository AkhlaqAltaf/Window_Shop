import "./navbar.css";
import {Link} from "react-router-dom";
import Cateogory from "../Categories/ItemsCategory";
import { AiOutlineMenu,AiOutlineSearch,AiOutlineLogin ,AiFillShopping} from 'react-icons/ai';
import {MdBusiness ,MdAddBusiness,MdAddShoppingCart} from 'react-icons/md';

         function NavBar() {
    return ( 
    <nav id="NavBar">
   

        <div class="dropdown" id="MenuBar">

  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={
    {
      color:"white"
    }
  }>
  <AiOutlineMenu />
  </button>
  <ul class="dropdown-menu">
    
    <Link to="/yourbusiness" className="dropdown-item"><p><MdBusiness/>Your Business</p></Link>
    <Link to="/addbusiness" className="dropdown-item"><p><MdAddBusiness/>Add Business</p></Link>
    <Link to="/additem" className="dropdown-item"><p><MdAddShoppingCart/>Add Items</p></Link>
    <Link to="/login" className="dropdown-item"><p><AiOutlineLogin/>LogIn</p></Link>
    
  </ul>

</div>


<div>

<input  type="search" placeholder="Search" id="search" />
<button id="searchIcon">
 <AiOutlineSearch/>

</button>


<div id="tabs">
  
  <Link   id="home" to="/">
    <p  class="btn btn-white btn-        animate">
      
    <AiFillShopping id="shp"/>Products
    </p>
  
  </Link>
  <Link to="/business" >
<p class="btn btn-white btn-        animate">
<MdBusiness id="shp"/>Business
</p>
  </Link>
</div>
<p ><Cateogory/></p>

</div>


</nav>

    
    
      );
}

export default NavBar;