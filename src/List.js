import React, { useContext } from "react";
import './css/list.css';
import { parentData } from "./ContactIndex";

const List = () => {
    const context = useContext(parentData);
    const { list, beforeEdit, remove,search} = context;
    
    const searchFilter=()=>{
        if(search){
            return (list.filter((ele)=>ele.person.toLowerCase().includes(search)||ele.number.toLowerCase().includes(search)));
        }else{
            return list;
        }
    }
    return (
        <>
        <div className="list-container">
            {searchFilter().map((ele, index) => {
                const { id, image, person, number } = ele;
                return (
                    <div className="contact-list" key={index}>
                        <div className="detail">
                            <div className="img-container">
                                <img src={image} alt="" className="image" />

                            </div>
                            <div className="detail-info">
                                <h3 className="name">{person}</h3>
                                <p className="number">{number}</p>
                            </div>
                        </div>
                        <div className="list-event">
                            <button className="edit-buton" onClick={() => beforeEdit(id)}>Edit</button>
                            <button className="del-buton" onClick={()=>remove(id)}>Delete</button>
                        </div>
                    </div>
                )
            })

           }
           </div>
        </>
    )
}
export default List;