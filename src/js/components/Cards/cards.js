import React from "react";
import "./cards.css";

const Cards = (props) => {
    
 return (
                    <div className="newTask" onClick={()=>props.onDelete()}>
                        <h1>{props.name}</h1>
                    </div>
                )}

            export default Cards;