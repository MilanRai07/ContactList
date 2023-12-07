import React from "react";
import { useState } from 'react';
import './css/addcontact.css';
import { ReactComponent as Profile } from "./assets/profile.svg";
import { ReactComponent as Plus } from "./assets/plus.svg";
const AddContact=()=>{
  const [file, setFile] = useState();
  const [show,setShow] =useState(true)
    function handleChange(event) {
        setFile(URL.createObjectURL(event.target.files[0]));
        setShow(false);
    }
    return(
        <>
          <div className="add-container">
               <div className="add-img-container">  
               { show?
               <Profile className="profile"/>
               :
               <img src={file} className="photo"></img>
              }
               <input className="file-input" type="file" id="file" onChange={handleChange}></input>
                    <label for="file"><Plus className="plus"/></label>
               </div>
               <div className="add-input">
               <input  className="add-inputbox namebox" type="text" placeholder="name" >
               </input>
               <input className="add-inputbox" type="number" placeholder="phone">                
               </input>
               </div>
               <div>
               <button className="edit-buton">Add</button>
               </div>
          </div>
        </>
    )
}
export default AddContact;