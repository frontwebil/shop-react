// import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Order.css";

export default function Order(props) {

  return (
    <div className="order-item">
      <div className="order-item-info">
        <img src={props.orderItem.img} alt="" className="order-image" />
        <div className="order-column-info">
          <h2 className="order-title">{props.orderItem.title}</h2>
          <p className="order-price">{props.orderItem.price + " $"}</p>
        </div>
      </div>
      <FaTrash className="order-item-deleteItem" onClick={()=>props.onDelete(props.orderItem.id)}/>
    </div>
  );
}
