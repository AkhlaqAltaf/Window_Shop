
import "../FormsStyle/BusinessOwnerForm.css";
import UploadAndDisplayImage from "./imageUpld";
function BusinessForm() {


  

    return ( 
       <div id="forms">

        <form class="row g-3" id="bsnsForm">
          
        <div id="ownerImage">
        {/* <UploadAndDisplayImage/> */}

          </div>
              <div><div class="mb-3">
        <label id="label" for="formGroupExampleInput" class="form-label">Owner Name</label>
        <input type="text" class="form-control" id="inputs" placeholder="Full Name"/>
      </div>
      <div class="mb-3">
        <label id="label" for="formGroupExampleInput2" class="form-label">Phone </label>
        <input type="Phone" class="form-control" id="inputs" placeholder="Phone"/>
      </div></div>
  <div class="col-md-6">
    <label id="label" for="inputEmail4" class="form-label">Business Name</label>
    <input type="email" class="form-control" id="inputs"/>
  </div>
  <div>
  <label id="label" for="inputCity" class="form-label">Category</label>
  <select id="inputs" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  
  <div class="col-12">
    <label id="label" for="inputAddress" class="form-label">Full Address</label>
    <input type="text" class="form-control" id="inputs"
     placeholder="1234 Main St"/>
  </div>
  
  <div class="col-md-6">
    <label id="label" for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputs"/>
  </div>
  <div class="col-md-4">
    <label id="label" for="inputState" class="form-label">State</label>
    <input type="text" class="form-control" id="inputs"/>
  </div>
 
 
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
     );
}

export default BusinessForm;