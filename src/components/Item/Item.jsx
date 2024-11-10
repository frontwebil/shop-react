import "./Item.css";

export function Item(props) {
  return (
    <div className="item">
      <img src={props.item.img} alt="" className="item-image" onClick={()=>props.onShowItem(props.item)}/>
      <h2 className="item-title">{props.item.title}</h2>
      <p className="item-description">{props.item.desc}</p>
      <p className="item-price">{props.item.price + ' $'}
      </p>
      <div className="add-to-cart" onClick={()=> props.onAdd(props.item)}>+</div>
    </div>
  );
}
