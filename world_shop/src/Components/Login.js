import { useState } from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Login.css";

function Login() {

  const [authMail,setMail]=useState(

    "Akhlaq"
  );

  const [authPass,setPass]=useState(

    "akhlaq"
  );


const setEmail=(refr)=>{
setMail(refr.target.value)

  
}
const setPassword=(ref)=>{

  setPass(ref.target.value)
}
const name="Akhlaq"
    return ( 
        <div id="loginForm">

       
        <form id="form">
  
  <div id="second">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label" className="label">Email</label>
    
   
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" className="inputs" placeholder="Email" 
      onChange={setEmail}
      />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label" className="label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" className="inputs" placeholder="Password"
      onChange={setPassword}
      />
    </div>
  </div>
  </div>

            <Link to="/" state={{data:{authMail ,authPass}}} >
           <button id="login" class="noselect">Login</button></Link>
          
</form>
</div>
     );
}

export default Login;