import React from 'react'

function Item({item,todoStatus,deleteData,modifyData}) {

  return (
          <li className={item.state ? 'active' : ''}>
            <input type="checkbox" data-code={item.date} onChange={todoStatus}/>
            <code>{item.todo}</code>
            {/* <button disabled={item.state ? true : false}>수정</button> */}
            <button disabled={item.state ? true:false} onClick={()=>{modifyData(item.date)}}>수정</button>
            <button onClick={()=>{deleteData(item.date)}}>삭제</button>
          </li>
  )
}

export default Item