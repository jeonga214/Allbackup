import React from 'react'

function Item_b({item}) {
    let preview = ()=>{
        console.log('dfad');
    }

  return (
    <figure onClick={preview}>
        <p><img src={item.thumb}></img></p>
        <figcaption>
        <b>{item.name}</b>
        <p>{item.price}</p>
        </figcaption>
    </figure>
  )
}

export default Item_b