import React, { useState } from "react";
import {AiFillCamera} from "react-icons/ai";
import "./business.css";
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
    
      {selectedImage && (
        <div>
        <img alt="not fount" style={{
           width: "30vw",
           height: "30vw",
           borderRadius: "360px",
           marginLeft:"-0.6vw",
        }} src={URL.createObjectURL(selectedImage)} />
       
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}

     <div>
     
     <div>
    
     <label id="camera" for="imageUpload" ><AiFillCamera/></label>
     <input
     id="imageUpload"
      style={{
      display:"none",
      }}
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
     </div>
    
     </div>
      
    </div>
  );
};

export default UploadAndDisplayImage;