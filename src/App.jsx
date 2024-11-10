import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Сіра Лампа",
      img: "products-img/lamp-grey-1.png",
      desc: "Lorem ipsum",
      category: "lamp",
      price: "17.00",
    },
    {
      id: 2,
      title: "Шкіряний Диван",
      img: "products-img/leather-sofa-2.png",
      desc: "Lorem ipsum",
      category: "sofa",
      price: "550.00",
    },
    {
      id: 3,
      title: "Білий Стіл",
      img: "products-img/white-table-3.png",
      desc: "Lorem ipsum",
      category: "table",
      price: "150.99",
    },
    {
      id: 4,
      title: "Білий стілець",
      img: "products-img/white-chair-4.png",
      desc: "Lorem ipsum",
      category: "chair",
      price: "20.99",
    },
    {
      id: 5,
      title: "М'який Диван",
      img: "products-img/sofa-5.png",
      desc: "Lorem ipsum",
      category: "sofa",
      price: "250.00",
    },
    {
      id: 6,
      title: "Білий стілець",
      img: "products-img/white-chair-6.png",
      desc: "Lorem ipsum",
      category: "chair",
      price: "21.00",
    },
    {
      id: 7,
      title: "Чорна Лампа",
      img: "products-img/black-lamp-7.png",
      desc: "Lorem ipsum",
      category: "lamp",
      price: "31.00",
    },
    {
      id: 8,
      title: "Біла Лампа",
      img: "products-img/white-lamp-8.png",
      desc: "Lorem ipsum",
      category: "lamp",
      price: "29.00",
    },
    {
      id: 9,
      title: "Білий стіл",
      img: "products-img/white-table-9.png",
      desc: "Lorem ipsum",
      category: "table",
      price: "278.99",
    },
  ]);
  const [orders, setOrders] = useState([]);

  const [currentItems, setCurrentItems] = useState(items);

  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem , setFullItem] = useState({})

  function addOrder(newOrder) {
    let isInArray = false;

    orders.forEach((el) => {
      if (el.id === newOrder.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      setOrders([...orders, newOrder]);
    }
  }

  function deleteOrder(id) {
    setOrders((oldOrders) => {
      return oldOrders.filter((el) => el.id !== id);
    });
  }

  function chooseCategory(category) {
    if (category === "all") {
      setCurrentItems(items);
      return;
    } else {
      setCurrentItems((actualItems) => {
        return items.filter((el) => el.category === category);
      });
    }
  }

  function onShowItem(item) {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addOrder} />
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
}
