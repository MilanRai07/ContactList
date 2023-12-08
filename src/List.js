import React, { useContext } from "react";
import './css/list.css';
import { parentData } from "./ContactIndex";
const List = () => {
    const context = useContext(parentData);
    const { list } = context;
    return (
        <>
            {list.map((ele, index) => {
                return (
                    <div className="contact-list" key={index}>
                        <div className="detail">
                            <div className="img-container">
                                <img src={ele.image} className="image" />
                            </div>
                            <div className="detail-info">
                                <h3>{ele.person}</h3>
                                <p className="number">{ele.number}</p>
                            </div>
                        </div>
                        <div className="list-event">
                            <button className="edit-buton">Edit</button>
                            <button className="del-buton" >Delete</button>
                        </div>
                    </div>
                )
            })

            }
        </>
    )
}
export default List;