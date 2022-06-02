import './App.css';
import CountdonwTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <div className="h1">
        <h1>Boot Camp</h1>
      </div>
      <div>
        <CountdonwTimer
        countdonwTimestampMS={1661860800000}/>
      </div>
    </div>
  );
}

export default App;
