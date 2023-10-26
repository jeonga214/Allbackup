import React, { useContext, useRef, useState } from 'react'
import {TestContext} from '../MyContext'

type Props = {}

    // catagory:,
    // msg:'dsfs',
    // id:'dfsfs'
interface ts_msg{
    [key:string]:FormDataEntryValue
}

const Write = (props: Props) => {
    const {data} = useContext(TestContext);
    const dataKey:string[] = Object.keys(data);
    const msgForm = useRef<HTMLFormElement | null>(null);
    const [community, setCommunity] = useState<ts_msg[]>([]);

    console.log(community);
    
    const insert = (e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        if(msgForm.current){
            let formdata = new FormData(msgForm.current);
            let idx:number = Date.now();
            formdata.append('id',idx.toString());

            let obj = Object.fromEntries(formdata);
            setCommunity( [...community, obj] );
        }
    }

  return (
    <article>
        <h2>Write</h2>
        <div>
            <form onSubmit={insert} ref={msgForm}>
                <select name='catagory'>
                    {
                        dataKey.map((obj:string, idx:number)=>(
                            <option key={idx}>{obj}</option>

                        ))
                    }
                </select>
                <textarea name='msg'></textarea>
                <input type='submit' value='저장'/>
            </form>
        </div>
    </article>
  )
}

export default Write