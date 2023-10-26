import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import {txt,txt2} from './animation'

function Scroll() {

  let inter = () =>{
    const elScroll = document.querySelector('.scroll');
    HTMLCollection.prototype.forEach = Array.prototype.forEach;

    elScroll.children.forEach((el)=>{
      if(el.offsetTop < window.pageYOffset + window.innerHeight){
        el.classList.add('active');
      }
    })
  }

  useEffect(()=>{
    // mounting
    window.addEventListener('scroll',inter);

    return ()=>{
      console.log('unmounting');
      window.removeEventListener('scroll',inter);
    }
  },[])

  return (
    <motion.div
      variants={txt}
      initial="init" 
      animate="play"
    >
      <h2>Scroll</h2>
      <div className='scroll'>
        <figure> 01 </figure>
        <figure> 02 </figure>
        <figure> 03 </figure>
        <figure> 04 </figure>
        <figure> 05 </figure>
        <figure> 06 </figure>
      </div>
      </motion.div>
  )
}

export default Scroll