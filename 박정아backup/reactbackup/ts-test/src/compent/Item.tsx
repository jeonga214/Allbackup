import React, { useRef } from 'react'
import {ts_sportsObj} from '../types';

type Props = {
    item:ts_sportsObj
}

const Item = ({item}: Props) => {
    const ele = useRef<HTMLLIElement | null>(null);

    const view = (id:number)=>{
        let str = `<div>${id}</div>`

        if(ele.current){
            ele.current.innerHTML = str;
            ele.current.style.cssText ='color:red; font-size:18px';
        }
        
    }

  return (
    <>
        <li ref={ele} onClick={()=>{view(item.id)}}>{item.title}</li>
    </>
  )
}

export default Item