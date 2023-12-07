import { useState } from 'react';
import './css/Contact.css';
import List from './List';
import { ReactComponent as Search } from './assets/search.svg';
import AddContact from './AddContact';
const ContactIndex=()=>{
   const [show,setShow]=useState(false);
 return(
  <>
      <div className='contact-container'>
        <div className='contact'>
        <div className='contact-head'>
          <h2>
               Contacts
          </h2>  
              <Search/>
          </div>
          { show?
          <List/>
          :
          <AddContact/>
          }        
      </div>  
      </div>
  </>
 )
}
export default ContactIndex;