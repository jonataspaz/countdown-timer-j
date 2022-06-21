import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils';

const useStyles = createUseStyles({
  sign: {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(270deg, #054217, #0e3911)',
    color: '#ffffff',
    textShadow: '1px 1px 1px',
    borderRadius: '15px',
    boxShadow: '0 0 10px 10px',
    padding: '2rem',
    flexDirection: 'column',
    fontFamily: 'Overpass, sans-serif',
    '& h1': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2rem',
    },
  },
  numberText: {
    fontSize: '1rem',
    display: 'flex',
    alignSelf: 'center',
  },
  countdownTimer: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'baseline',
    '& span': {
      fontSize: '2rem',
    },
  },
  timerBoxes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

export default function CountdownTimer({ countdownTimestampMS, title }) {
  const classes = useStyles();
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMS);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMS]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
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
    </div>
  );
}
