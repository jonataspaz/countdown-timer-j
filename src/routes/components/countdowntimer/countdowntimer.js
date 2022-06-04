import { useState, useEffect } from 'react';
import './countdowntimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMS, title}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMS);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMS])

    function updateRemainingTime(countdown) {
        setRemainingTime (getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="sign">
            <h1>{title}</h1>
            <div className="countdown-timer">
                <div className="timer-boxes">
                    <span>{remainingTime.days}</span>
                    <p className="number-text">Days</p>
                </div>
                <div className="colon">
                    <span>:</span>
                </div>
                <div className="timer-boxes">
                    <span>{remainingTime.hours}</span>
                    <p className="number-text">Hours</p>
                </div>
                <div className="colon">
                    <span>:</span>
                </div>
                <div className="timer-boxes">
                    <span>{remainingTime.minutes}</span>
                    <p className="number-text">Minutes</p>
                </div>
                <div className="colon">
                    <span>:</span>
                </div>
                <div className="timer-boxes">
                    <span>{remainingTime.seconds}</span>
                    <p className="number-text">Seconds</p>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;