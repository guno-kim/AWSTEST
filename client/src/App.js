import logo from './logo.svg';
import './App.css';
import axios from './axios'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        axios.get('/')
      }}>temp</button>
    </div>
  );
}

export default App;
