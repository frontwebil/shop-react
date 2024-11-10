import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "../Order/Order.jsx";
import "./header.css";

export default function header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach((el)=>
      sum += Number.parseFloat(el.price)
    )
    return (
      <div className="shop-cart">
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} orderItem={el} />
        ))}
        <p className="summa">До сплати: <span className="sum-price">{sum} $</span></p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="shop-cart">
        <h4 className="showNothingText">Корзина пуста</h4>
      </div>
    );
  };

  return (
    <header className="header">
      <div className="header-nav-wrapper">
        <h1 className="header-logo">Style & Comfort</h1>
        <nav className="header-nav">
          <p className="header-nav-button">Зв'яжіться з нами</p>
          <p className="header-nav-button">Про нас</p>
          <p className="header-nav-button">Контакти</p>
          <FaBasketShopping
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`header-nav-cart-button ${cartOpen && "active"}`}
          />

          {cartOpen && (
            <>{props.orders.length > 0 ? showOrders(props) : showNothing()}</>
          )}
        </nav>
      </div>
      <div className="presentation">
        <h2 className="presentation-title">
          More Comfortable. <br />
          More Classy.
        </h2>
      </div>
    </header>
  );
}
