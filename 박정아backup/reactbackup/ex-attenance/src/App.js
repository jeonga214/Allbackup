

import Attendance from './Attendance';
import './App.css';
import AttendWrite from './page/AttendWrite';
import AttendList from './page/AttendList';
import { useState } from 'react';

function App() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const toggleButtonClass = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div className='whole'>
      <Attendance>
      <div className='plus' onClick={toggleButtonClass}>+</div>
      <AttendWrite isButtonActive={isButtonActive}/>
      <AttendList/>
    </Attendance>
    </div>
  );
}

export default App;
