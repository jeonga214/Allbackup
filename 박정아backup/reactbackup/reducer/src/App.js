
import './App.css';
import {Context} from './Context';
import List from './component/List';
import Write from './component/Write';

function App() {
  return (
    <Context>
      <Write/>
      <List/>
    </Context>
  );
}

export default App;
