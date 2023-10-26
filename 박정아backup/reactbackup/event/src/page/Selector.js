import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import {txt,txt2} from './animation'

function Selector() {
  const element = useRef(null);
  const elementAll = useRef([]);
  const [state,setState] = useState(false);
  let data = [1,2,3,4,5];

  let pop = () =>{
    // popup 클래스를 add
    element.current.classList.toggle('active');
  }

  function selectorAll(){
    elementAll.current.forEach(ele =>{
      ele.style="background-color:aliceblue";
    });
  }

  let like = ()=>{
    //state => true
    setState(!state);
  }

  useEffect(()=>{
    selectorAll();
  },[])



  return (
    <motion.div
      variants={txt}
      initial="init" 
      animate="play"
    >
      <article>
        <h2>Selector</h2>
        <button onClick={pop}>열기</button>
        <div className='popup' ref={element}>
          팝업창...
        </div>
      </article>

      <article>
        <h2>selectorAll</h2>
        <ul>
          {
            data.map((item,k) =>(
            <li key={k} ref={(el)=> {elementAll.current[k]=el}}>
              다중이 {item}...
            </li>
            ))
          }
        </ul>
      </article>

      <article>
        <h2> state값을 변경하여 element제어 </h2>
        <button onClick={like}>좋아요</button>
        <div className={`aaa ${state?'active':''}`}>
          활성화 & 비활성화
        </div>
      </article>
      </motion.div>
  )
}

export default Selector