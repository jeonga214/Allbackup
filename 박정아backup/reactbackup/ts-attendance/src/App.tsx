import MyContext from './Context';

import './App.css';
import Insert from './Insert';
import { useState } from 'react';
import List from './List';

const App:React.FC = ()=>{
  
  const [state,setState] = useState(false);
  const pop = ()=>{
    setState(!state);
  }
  return (
    <MyContext>
      <article>
        <h2>출석부 리스트</h2>
        
          <List/>
        
      </article>

      <aside>
        <button onClick={pop}> {state?'-':'+'} </button>
        <div className={`popup ${state?'active':''}`}>
          <Insert/> 
        </div>
      </aside>
    </MyContext>
  );
}

export default App;
