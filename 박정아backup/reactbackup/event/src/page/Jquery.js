import React, { useEffect } from 'react'
import $ from 'jquery'

function Jquery() {

  function test(){
    $('.txt').css('color','red');
  }
  useEffect(test,[])

  return (
    <article>
      <h2>Jquery</h2>
      <div className='txt'>
        npm install jquery <br/>
        ㄴ import $ from 'jquery'
      </div>
    </article>
  )
}

export default Jquery