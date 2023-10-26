import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './Home';
import List from './compent/List';
import MyContext from './MyContext';
import Write from './compent/Write';

function App() {
  return (
    <BrowserRouter>

      <header>
        <Link to ='/'>Home</Link>
        <Link to ='/list'>Community</Link>
      </header>
      
      <main>
        <MyContext>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/list' element={<Write/>}/>
          </Routes>
        </MyContext>
      </main>

    </BrowserRouter>
  );
}

export default App;
