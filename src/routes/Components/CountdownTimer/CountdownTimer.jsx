import { useState, useEffect } from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils'
import React from 'react'
import {createUseStyles} from 'react-jss'
// import UserTime from './UserTime';


const useStyles = createUseStyles({
    
    sign: {
        display: 'flex',
        justifyContent: 'center',
        background: "linear-gradient(270deg, #054217, #0e3911)",
        color: '#ffffff',
        textShadow: '1px 2px 2px',
        borderRadius: '15px',
        boxShadow: '0 0 5px 5px',
        padding: '2vw',
        flexDirection: 'column',
        fontFamily: 'Overpass, sans-serif',
        '& h1': {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '3vw'
        },
    },
    numberText: {
        fontSize: '3vw'
    },
    countdownTimer: {
        display: 'flex',
        alignSelf: 'flex-start',
        alignItems: 'baseline',
        '& span': {
            margin: '2px',
            fontSize: '5vw'
        },
    },
    timerBoxes: {
        margin: '10px',
        alignItems: 'baseline',
    }

})






const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMS, title}) => {
    const classes = useStyles()
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
        <div>
            <div className={classes.sign}>
                <h1>{title}</h1>
                <div className={classes.countdownTimer}>
                    <div className={classes.timerBoxes}>
                        <span>{remainingTime.days}</span>
                        <p className={classes.numberText}>Days</p>
                    </div>
                    <div>
                        <span>:</span>
                    </div>
                    <div className={classes.timerBoxes}>
                        <span>{remainingTime.hours}</span>
                        <p className={classes.numberText}>Hours</p>
                    </div>
                    <div>
                        <span>:</span>
                    </div>
                    <div className={classes.timerBoxes}>
                        <span>{remainingTime.minutes}</span>
                        <p className={classes.numberText}>Minutes</p>
                    </div>
                    <div>
                        <span>:</span>
                    </div>
                    <div className={classes.timerBoxes}>
                        <span>{remainingTime.seconds}</span>
                        <p className={classes.numberText}>Seconds</p>
                    </div>
                </div>
            </div>
            {/* <div>
                <UserTime title="BootCamp"/>
            </div> */}
        </div>

    );
}

export default CountdownTimer;