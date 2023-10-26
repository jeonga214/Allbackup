import React from 'react'
import st from '../page.module.css'
import '../style.scss'

export default function Page() {
  return (
    <>
        <div className={st.txt}>page</div>
        <div className="txt">글로벌 스타일</div>
        <img src='/next.svg'/>
        <button className='btn'>scss btn</button>
    </>
  )
}
