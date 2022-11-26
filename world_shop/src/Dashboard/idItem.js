import { useState } from "react";
import { Link } from "react-router-dom";


function BusinessId() {

    const Styles={

        backgroundColor:"skyBlue",
    }
    
const [id,setId]=useState(0);

const handleChange=(e)=>{
setId(e.target.value);
    
}

//Control Component


const submitCont=(e)=>{
e.preventDefault();

}

    return ( <form  onSubmit={submitCont}>
 <div>

    <label  >
        Enter Product Name
    </label>
    <input style={{

        borderRadius:"60px",
        
    }}
    type={Text} onChange={handleChange} />
 </div>
 <Link to="/prod" >

<button style={Styles}>Go To Product</button>
</Link>
<h5>
    {id}
</h5>
    </form> );

    
}

export default BusinessId;