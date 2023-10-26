import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import List from './compent/List';
import MyContext from './MyContext';
import Write from './compent/Write';
import First from './compent/First';

function App() {
  return (
    <BrowserRouter>

      <main>
        <MyContext>
          <Routes>
            <Route path='/' element={<First/>}/>
            <Route path='/write' element={<Write/>}/>
            <Route path='/list' element={<List/>}/> 
          </Routes>
        </MyContext>
      </main>

      <footer>
        <Link to ='/'></Link>
        <Link to ='/write'>신규등록</Link>
        <Link to ='/list'>리스트</Link>
      </footer>

    </BrowserRouter>
  );
}

export default App;
