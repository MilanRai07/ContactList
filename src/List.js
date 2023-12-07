import React from "react";
import './css/list.css';
const List = () => {
    let img = require('./assets/person1.jpg');
    return (
        <>
            <div className="contact-list">
                <div className="detail">
                    <div className="img-container">
                    <img src={img} className="image" />
                    </div>
                    <div className="detail-info">
                        <h3>Milan Rai</h3>
                        <p className="number">9860797531</p>
                    </div>
                </div>
                <div className="list-event">
                    <button className="edit-buton">Edit</button>
                    <button className="del-buton" >Delete</button>
                </div>
            </div>
        </>
    )
}
export default List;