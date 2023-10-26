import React, { useContext, useEffect, useRef, useState } from 'react'
import {TestContext} from '../MyContext'
import List from './List'

type Props = {}

    // catagory:,
    // msg:'dsfs',
    // id:'dfsfs'
interface ts_msg{
    [key:string]:FormDataEntryValue
}


const Write = (props: Props) => {
    const {data,setData} = useContext(TestContext);
    const dataKey:string[] = Object.keys(data);
    const msgForm = useRef<HTMLFormElement | null>(null);
    
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setData(parsedData);
        }
      }, [setData]);

    const insert = (e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        if(msgForm.current){
            let formdata = new FormData(msgForm.current);
            let idx:number = Date.now();
            formdata.append('id',idx.toString());

            let obj = Object.fromEntries(formdata);
            // 데이터 업데이트
            const updatedData = [...data, obj];
            
            // 업데이트된 데이터로 상태 업데이트
            setData(updatedData);

            localStorage.setItem('data', JSON.stringify(updatedData));

        }
    }

  return (
    <article className='write'>
        <h2>Write</h2>
        <div>
            <form onSubmit={insert} ref={msgForm}>
                <input type='text' name='msg'/>
                <input type='tel' name='pnum'/>
                <input type='submit' value='저장'/>
            </form>
        </div>
    </article>
  )
}

export default Write