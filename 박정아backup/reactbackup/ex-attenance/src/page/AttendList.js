import {DataContext} from '../Attendance'
import {useContext} from 'react'
import { useState } from 'react';

function AttendList() {
    const {data,setData} = useContext(DataContext);
    let num = data.length;

    const handleDeleteItem = (index) => {
        const newDataList = [...data];
        newDataList.splice(index, 1);
        setData(newDataList);

    };


  return (
    <article className='AList'>
        <div className='numm'>
            참여인원: {num}명
        </div>
        <ul>
            {
                data.map((item,index)=>(
                    <li key={index}>
                        {item.name}
                        <input type='reset' value='삭제' className='remove' onClick={()=>handleDeleteItem(index)}></input>
                    </li>
                ))
            }
        </ul>
    </article>
  )
}

export default AttendList