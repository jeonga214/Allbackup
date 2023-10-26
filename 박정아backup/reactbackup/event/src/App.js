
import './App.css';
import {Link,BrowserRouter,Route,Routes, Router} from 'react-router-dom';
import $ from 'jquery';
import Selector from './page/Selector';
import Scroll from './page/Scroll';
import Jquery from './page/Jquery';
import Framer from './page/Framer';
import Slide from './page/Slide';
import ReactVideo from './page/ReactVideo';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to = "/"> Selector(useRef) </Link>
        <Link to = "/scroll"> Scroll event </Link>
        <Link to = "/jquery"> Jquery </Link>
        <Link to = "/framer"> Framer Motion </Link>
        <Link to = "/slide"> Slide Swiper </Link>
        <Link to = "/video"> ReactVideo </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Selector/>}/>
          <Route path='/scroll' element={<Scroll/>}/>
          <Route path='/jquery' element={<Jquery/>}/>
          <Route path='/framer' element={<Framer/>}/>
          <Route path='/slide' element={<Slide/>}/>
          <Route path='/video' element={<ReactVideo/>}/>
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
