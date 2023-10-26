"use client" //이거써야 문법사용가능
import { useRouter } from 'next/navigation'; //useRouter는 링크이동
import React, { useState } from 'react'

export default function page() {
    const router = useRouter();
    const [count,setCount] = useState(0);

    const move = () => {
        console.log('dsd');
        router.push(`/js/${count}`);
    }

  return (
    <div>
        page
        <button onClick={move}> 클릭이벤트 </button>
        <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>
  )
}
