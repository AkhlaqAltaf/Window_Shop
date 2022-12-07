
import {Routes,Route, Link} from "react-router-dom";
const NavBar=()=>{



    return(

<nav class="navbar bg-secondary fixed-top"  style={{position:"fixed",
 boxShadow: '1px 2px 9px black inset',
 opacity:0.8,
}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">World Shop</a>
    <input id="SearchForm" type={"search"} placeholder="Search"  style={{

    
    }}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">World Shop</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
           
          <Link to="/Login" style={{
         
            borderStyle:"none",
            color:"darkgray"
          }}>Login</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Add Shop</a>
          </li>
         
            
          
        </ul>
        <form class="d-flex mt-3" role="search">
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button> */}
        </form>
      </div>
    </div>
  </div>
</nav>
    
    );
}
export default NavBar;