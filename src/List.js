import React, { useContext, useEffect, useState } from "react";
import './css/list.css';
import { parentData } from "./ContactIndex";

const List = () => {

    const context = useContext(parentData);
    const { list } = context;

    return (
        <>
            {list.map((ele, index) => {
                const { image, person, number } = ele;
                return (
                    <div className="contact-list" key={index}>
                        <div className="detail">
                            <div className="img-container">                   
                                    <img src={image} alt="" className="image" />
            
                            </div>
                            <div className="detail-info">
                                <h3>{person}</h3>
                                <p className="number">{number}</p>
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