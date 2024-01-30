// import D3Chart from "./Components/D3CHart/D3Chart";
import './App.css'
import MainDash from './Components/MainDash/MainDash';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return(
    <div className="App" >
      <div className="appGlass">
        <Sidebar />
        <MainDash/>
      </div>
    </div>
    
  );
}

export default App;
