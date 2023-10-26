

import MyContext from './MyContext';

import './App.css';
import List from './page/List';
import Write from './page/Write';


function App() {
  
  return (
    <MyContext>
      <List/>
      <Write/>
    </MyContext>
  );
}

export default App;
