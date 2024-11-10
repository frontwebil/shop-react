// import React from "react";
import "./ShowFullItem.css";
import { IoMdClose } from "react-icons/io";

export default function ShowFullItem(props) {
  return (
    <div className="show-full-item">
      <div className="show-full-item-container">
        <IoMdClose className="close-show-full-item" onClick={() => props.onShowItem(props.item)}/>
        <img
          src={props.item.img}
          alt=""
          className="show-full-item-image"
          onClick={() => props.onShowItem(props.item)}
        />
        <h2 className="item-title">{props.item.title}</h2>
        <p className="item-description">{props.item.desc}</p>
        <p className="item-price">{props.item.price + " $"}</p>
        <div className="add-to-cart" onClick={() => props.onAdd(props.item)}>
          +
        </div>
      </div>
    </div>
  );
}
