import React, { useContext, useRef } from 'react'
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';

function Insert() {
    const elForm = useRef();
    const navigate = useNavigate();

    const {fetchFn} = useContext(MyContext);

    const insertFn = (t,e) => {
        e.preventDefault();
        console.log(t);
        let formdata = new FormData(elForm.current);
        let today = new Date();
        let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        formdata.append('date',date)

        let ObjForm = Object.fromEntries(formdata);
        fetchFn('post',ObjForm);
        navigate('/');

    }

  return (
    <article>
        <h2>Insert</h2>
        <form ref={elForm}>
            <input type="text" name="price"/>
            <textarea name="msg"></textarea>
            <button onClick={(e)=>{insertFn('p',e)}}>예금하기</button>
            <button onClick={(e)=>{insertFn('m',e)}}>출금하기</button>
        </form>
    </article>
  )
}

export default Insert