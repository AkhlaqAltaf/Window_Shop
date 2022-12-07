

import {Link} from "react-router-dom";

function LoginForm() {
    return ( 
      <div >



  <div style={{
    marginTop:'20vh',
    marginLeft:"25vw",
  }}>
  <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Email</label>
  <input style={{
    opacity:0.7,
    width:"50vw",
  }}
  type="text" class="form-control" id="formGroupExampleInput" placeholder="Email"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Password</label>
  <input style={{
    opacity:0.7,
    width:"50vw",
  }}
  type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password"/>
</div>
  <div style={{
    padding:"10px",
  }}>
  <Link to="/"><button type="submit"style={{
   backgroundColor:"skyblue",
   borderStyle:"none",
   borderRadius:"50px",
    
  }}>Sign in</button></Link>
  <Link to="/signUp"><button style={{
    marginLeft:"10px",
    backgroundColor:"skyblue",
    borderStyle:"none",
    borderRadius:"50px", 

  }}
  type="submit">Sign up</button></Link>
</div>
</div>
</div>
     );
}

export default LoginForm;