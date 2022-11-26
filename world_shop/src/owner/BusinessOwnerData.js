import RegisterBusiness from "../Dummy-Data/RegisterBusiness";
import "./BusinessOwner.css";
function Owners() {
    
    
    return (  
      <div class="center">
      <div class="property-card">
        <a href="#">
          <div class="property-image">
            <div class="property-image-title">
             <h5>Card Title</h5>
            </div>
          </div></a>
        <div class="property-description">
          <h5> Card Title </h5>
          <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
        </div>
        <a href="#">
          <div class="property-social-icons">
            {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
          </div>
        </a>
      </div>
    </div>
    );

   
}

export default Owners;