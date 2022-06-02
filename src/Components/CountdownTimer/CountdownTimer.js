import { useState, useEffect } from 'react';
import './Countdowntimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdonwTimer = ({countdonwTimestampMS}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdonwTimestampMS);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdonwTimestampMS])

    function updateRemainingTime(countdown) {
        setRemainingTime (getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    );
}

export default CountdonwTimer;