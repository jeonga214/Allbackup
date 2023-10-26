import React, { useContext } from 'react'
import { MyContext } from '../Context'
import Item from './Item';

function List() {
  const {data,fetchFn} = useContext(MyContext);

  return (
    <article>
        <h2>List</h2>
        <p className='total'> 총 잔액 -<code>3500</code> </p>
        <ul>
          {
            data.map(obj=>(
              <Item key={obj.id} obj={obj}/>
            ))
          }
        </ul>
    </article>
  )
}

export default List