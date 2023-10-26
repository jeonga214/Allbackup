"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Insert() {
    const navi = useRouter();

    const insertFn = (e) =>{
        e.preventDefault();
        const formdata =new FormData(e.target);
        const values = Object.fromEntries(formdata);
        
        axios.post('/api',values);
        navi.push('./list');
    }
  return (
    <div>
        <form onSubmit={insertFn}>
        <p><input type='text' name='id'/></p>
        <p><input type='text' name='name'/></p>
        <p><input type='email' name='email'/></p>
        <p><input type='submit' name='저장'/></p>
      </form>
    </div>
  )
}

export default Insert