
import { useEffect, useState } from 'react';
import './App.scss';
import Item from './component/Item';

const initData = [
  //{todo:'리액트공부하기', state:false, date:Date.now()}
]

function App() {

  const [data, setData] = useState(initData);
  //setData는 data의 수정값 
  //return되면 값이 리셋되서 useState이용
  const [count, setCount] = useState(0);

  const [mode,setMode] = useState(true);
  const [mData,setMdata] = useState('');
  const [mCode,setCode] = useState();


  const modifyData = (code)=>{
    setCode(code);
    setMode(false);

    let data2 = data.filter(obj => obj.date == code);
    setMdata(data2[0].todo);
  }
  
  const deleteData = (code) => {
    console.log(code);
    let delData = data.filter(obj => obj.date != code);
    setData(delData);
  }

  const todoCount = () =>{
    let dataCount = data.filter(obj => obj.state == false);
    setCount(dataCount.length);
  }

  const todoStatus = (e)=>{
    let stateCode = e.target.checked;
    let dateCode =e.target.dataset.code;
    
    let dataFind = data.map((obj) => {
                                  if(obj.date == dateCode){
                                    obj.state = stateCode;
                                  }
                                  return obj;
                                });
    setData(dataFind);
  }
  console.log(data);

  const insert = (e) =>{
    e.preventDefault();
    let todo = e.target.todo.value;
    if(mode){
      setData([...data,{todo, state:false, date:Date.now()}]);
      e.target.todo.value='';
      setMdata('');
    }else{
      setData(
        data.map(obj=>{
          if(obj.date == mCode){
            obj.todo = todo;
          }
          return obj;
        })
      );
      setMode(true);
      setMdata('');
    }

  }
  
  data.sort(function(b,a){
    if(a.date>b.date){ return 1; }
    if(a.date<b.date){ return -1; }
    return 0;
  })

    useEffect(()=>{
    todoCount();
  },[data])


  return (
    <div className='App'>
      <article>
        <h1> Todo List <span>할일 {count}개 남음</span></h1>
        <ul>
          {
            data.map((obj)=>(
              <Item key={obj.date} item={obj} todoStatus={todoStatus} deleteData={deleteData} modifyData={modifyData}/>
            ))
          } 
          
        </ul>
        <form onSubmit={insert}>
          <p>
            {
              <p>
              <input type="text" name="todo" value={mData} 
              onChange={(e)=>setMdata(e.target.value)}/>
              <button>{(mode) ? '등록' : '수정'}</button>
              </p>
              
            }
            
          </p>
        </form>
      </article>
    </div>
  );
}

export default App;
