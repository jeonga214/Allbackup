import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Adopt from './comp/Adoptt';
import Home from './comp/Home';
import GlobalStyles from "./GlobalStyles";
import Chat from './comp/Chat';
import Kakao from './comp/Kakao';
import Detail from './comp/Detail';
import Reservation from './comp/Reservation';
import PastReservation from './comp/PastReservation';

function App() {
  return (
    <BrowserRouter basename='/person_pet/'>
      <GlobalStyles/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/pastreservation" element={<PastReservation/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/kakao" element={<Kakao/>} />
          <Route path="/adopt" element={<Adopt/>} />
          <Route path="/adopt/:desertionNo" element={<Detail/>} />
        </Routes>
      </main>

      <footer>
        <div className='foot'>
          <nav>
            <Link to="/"><img src={process.env.PUBLIC_URL + '/home.svg'} alt='홈'/></Link>
            <Link to="/chat"><img src={process.env.PUBLIC_URL + '/chat.svg'} alt='채팅'/></Link>
            <Link to="/kakao"><img src={process.env.PUBLIC_URL + '/location.svg'} alt='지도'/></Link>
            <Link to="/adopt"><img src={process.env.PUBLIC_URL + '/volunteer.svg'} alt='입양'/></Link>
            {/* <Link to="/">마이페이지</Link> */}
          </nav>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;
