"use client"
import React, { useEffect } from 'react'

function Contact() {

    // axios.post('/api',{})
    
    useEffect(()=>{

        fetch('/api',{
            method:'post',
            body:JSON.stringify({b:3000}),
            headers:{
                'Content-type' : 'application/json'
                // 'api-key':24087304732,
                // 'clienID':32947300
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })


        // fetch('/api')
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res);
        // })


    },[])


  return (
    <div>Contact</div>
  )
}

export default Contact