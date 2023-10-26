
import './App.scss';
import Home from './page/Home';
import Css from './page/Css';
import Image from './page/Image';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';
import GitDeploy from './page/GitDeploy';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/react-basic'>
    <div className="wrap">
      <header>
        <nav>
          <Link to="/"> HOME </Link>
          <Link to="/css"> CSS 활용 </Link>
          <Link to="/img"> IMGAGE 활용 </Link>
          <Link to="/router" state='a100'> Router(페이지이동) </Link>
          <Link to="/props"> State&Props 활용 </Link>
          <Link to="/gitDepoly"> Github Deploy </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/img' element={<Image/>}/>
          <Route path='/router' element={<Router/>}/>
          <Route path='/props' element={<StateProps data='1000' name='props'/>}/>
          <Route path='/gitDepoly' element={<GitDeploy/>}/>
          <Route path='/*' element={<Not/>}/>
        </Routes>
      </main>

    </div>
    </BrowserRouter>
  );
}

export default App;
