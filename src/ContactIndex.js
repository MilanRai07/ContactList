import { createContext, useState } from 'react';
import './css/Contact.css';
import List from './List';
import { ReactComponent as Search } from './assets/search.svg';
import { ReactComponent as Plus } from "./assets/plus.svg";
import AddContact from './AddContact';

const parentData = createContext();                      //creation for context ApI

const ContactIndex = () => {
  const [show, setShow] = useState(true);                   // show list or addcontact component
  const [defaultImg, setDefaultImg] = useState(true);     //show default add image icon or uploadedpicture
  const [image, setImage] = useState();                   //store image uploaded 
  const [person, setPerson] = useState();                 //for name
  const [number, setNumber] = useState();                //for phone number
  const [list, setList] = useState([]);                //store datas


  const handleChange = (event) => {                    
    setImage(URL.createObjectURL(event.target.files[0]));
    setDefaultImg(false);
  }

  const addCircle = () => {                      //circel button/icon to redirect to add contact component
    setShow(false);
  }
  const add = () => {                           //store datas into list
    let id=new Date().toLocaleTimeString();
    setList((olditems) => {
      return [...olditems, {id:id, image: image, person: person, number: number }]
    })
    setShow(true);
    setPerson("");
    setNumber("");
    setDefaultImg(true);
  }
  const contextValue = {                //values to be send to child components
    imgDefault: defaultImg,
    image: image,
    person: person,
    number: number,
    setPerson: setPerson,
    setNumber: setNumber,
    add: add,
    list: list,
    handleChange: handleChange

  }
  return (
    <>
      <div className='contact-container'>
        <div className='contact'>
          <parentData.Provider value={contextValue}>             {/* provider tag*/}
            <div className='contact-head'>
              <h2>
                Contacts
              </h2>
              <Search />
            </div>
            {show ?
              <List />
              :
              <AddContact />
            }
            <Plus className='contact-adder' onClick={addCircle} />
          </parentData.Provider>
        </div>

      </div>
    </>
  )
}
export default ContactIndex;
export { parentData };