
import './App.css';
import axios from 'axios';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Insert from './component/Insert';
import List from './component/List';
import Context from './Context';
import Modify from './component/Modify';

function App() {

  // axios.put('http://localhost:3030/history/1',{"msg":"커피"});
  //put변경,delete삭제,get가져오기,post추가


  return (
    <Context>
      <HashRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/insert">글쓰기</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/modify" element= {<Modify/>}/>
          </Routes>
        </main>
      </HashRouter>
    </Context>
  );
}

export default App;
