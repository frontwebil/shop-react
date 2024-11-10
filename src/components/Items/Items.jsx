import React from 'react'
import Item from '../Item/Item'
import "./items.css"

export default function Items(props) {
  return (
    <main className='items-wrapper'>
      {props.items.map((el)=>{
        return(
          <Item key={el.id} item={el} onAdd={props.onAdd} onShowItem={props.onShowItem}/>
        )
      })}
    </main>
  )
}
