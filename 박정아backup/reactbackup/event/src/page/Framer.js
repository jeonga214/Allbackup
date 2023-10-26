import React from 'react'
import {motion} from "framer-motion"
import {txt,txt2} from './animation'
// import * as all from './animation'

function Framer() {

  return (
    <article>
      <h2>Framer Motion</h2>

      <motion.div 
      variants={txt}
      initial="init" 
      animate="play"
      >

        npm install framer-motion<br/>
        ㄴ import &#123motion&#125 from "framer-motion"

      </motion.div>

    </article>
  )
}

export default Framer