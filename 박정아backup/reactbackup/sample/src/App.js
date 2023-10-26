
import React, { useEffect, useState } from "react";

import './App.scss';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';
import Product_b from './page/Product_b';
import data from "./page/data.json";

import axios from 'axios';
import ParamItem from "./page/ParamItem";

function App() {
  let [data_b,setData] = useState();

  useEffect(function(){
    axios.get('/data_b.json')
    .then(d=>{
      setData(d.data);
    })
  },[])

  

    // 초기 색상 상태를 정의합니다. 각각의 메뉴에 대해 개별적인 상태를 정의합니다.
  const [selectedMenu, setSelectedMenu] = useState(null);

  // 메뉴 클릭 이벤트 핸들러를 정의합니다.
  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
  };

  // 선택된 메뉴와 비교하여 색상을 지정하는 함수를 작성합니다.
  const getMenuColor = (menuName) => {
    return selectedMenu === menuName ? 'red' : 'black';
  };
  



  if(!data_b) return <>로딩중....</>;

  return (
    <BrowserRouter>
      <div className="wrap">
      <header>
        <nav>
          <Link to="/home" style={{ color: getMenuColor('menu1') }} onClick={() => handleMenuClick('menu1')}> HOME </Link>
          <Link to="/product" style={{ color: getMenuColor('menu2') }} onClick={() => handleMenuClick('menu2')}> Product </Link>
          <Link to="/product_b" style={{ color: getMenuColor('menu3') }} onClick={() => handleMenuClick('menu3')}> Product_b </Link>
          <Link to="/paramItem/code100" style={{ color: getMenuColor('menu4') }} onClick={() => handleMenuClick('menu4')}> ParamItem </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/product' element={<Product data={data}/>}/>
          <Route path='/product_b' element={<Product_b data={data_b}/>}/>
          <Route path='/paramItem/:code' element={<ParamItem data={data_b}/>}/>
        </Routes>
      </main>

    </div>
    </BrowserRouter>
  );
};



export default App;
