import { useState, useContext } from 'react';
import './css/addcontact.css';
import { parentData } from './ContactIndex';
import { ReactComponent as Profile } from "./assets/profile.svg";
import { ReactComponent as Plus } from "./assets/plus.svg";
const AddContact = () => {
  const context = useContext(parentData);
  const { imgDefault, image, person, number, add, setImage, setPerson, setNumber, handleChange } = context;
  return (
    <>
      <div className="add-container">
        <div className="add-img-container">
          {imgDefault ?
            <Profile className="profile" />
            :
            <img src={image} className="photo"></img>
          }
          <input className="file-input" type="file" id="file" onChange={handleChange}></input>
          <label for="file"><Plus className="plus" /></label>
        </div>
        <div className="add-input">
          <input className="add-inputbox namebox" type="text" placeholder="name"
            value={person}
            onChange={(event) => setPerson(event.target.value)}
          >
          </input>
          <input className="add-inputbox" type="number" placeholder="phone"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          >
          </input>
        </div>
        <div>
          <button className="edit-buton" onClick={add}>Add</button>
        </div>
      </div>
    </>
  )
}
export default AddContact;