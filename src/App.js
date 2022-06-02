import './App.css';
import CountdonwTimer from './Components/CountdownTimer/CountdownTimer';
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  useEffect(() => {
    document.title = "Countdown Timer"
  }, [])
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
