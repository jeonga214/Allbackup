
import React, { useEffect, useState } from "react";

import './App.css';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './page/Home';
import axios from 'axios';
import Param from './page/Param';

function App() {
  let [data,setData] = useState();

  useEffect(function(){
    axios.get('/data.json')
    .then(d=>{
      setData(d.data);
    })
  },[])

  if(!data) return <>로딩중....</>;

  return (

    <BrowserRouter>
      <div>
      <header>
        <nav>
          <Link to="/home"> HOME </Link>
          <Link to="/param/code100"> PARAM상세1 </Link>
          <Link to="/param/code200"> PARAM상세2 </Link>
         
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/home' element={<Home data={data}/>}/>
          <Route path='/param/:code' element={<Param data={data}/>}/>
        </Routes>
      </main>

    </div>
    </BrowserRouter>

  );
}

export default App;
