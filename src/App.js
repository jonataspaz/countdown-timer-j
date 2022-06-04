import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    
    <div className="App">
      <div>
        <CountdownTimer countdownTimestampMS={1661860800000} title="BootCamp"/>
      </div>
    </div>
  );
}

export default App;
