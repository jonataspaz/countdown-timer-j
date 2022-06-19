import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownTimerUtils";
import React from "react";
import dayjs from "dayjs";
import { createUseStyles } from "react-jss";
// import UserTime from './UserTime';

const useStyles = createUseStyles({
  sign: {
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(270deg, #054217, #0e3911)",
    color: "#ffffff",
    textShadow: "1px 2px 2px",
    borderRadius: "15px",
    boxShadow: "0 0 5px 5px",
    padding: "2rem",
    flexDirection: "column",
    fontFamily: "Overpass, sans-serif",
    "& h1": {
      display: "flex",
      justifyContent: "center",
      fontSize: "2rem",
    },
  },
  numberText: {
    fontSize: "2rem",
  },
  countdownTimer: {
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "baseline",
    "& span": {
      margin: "1rem",
      fontSize: "2rem",
    },
  },
  timerBoxes: {
    margin: "2rem",
    alignItems: "baseline",
  },
});

export function getCalenderTime(time) {
  let now = dayjs();
  if (time > 0) {
    console.log(time);
    return time;
  }
  now = dayjs(`${now.format("YYYY-MM-DD")}`).valueOf();
  return now;
}

// var nowMs = getCalenderTime()

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

export const CountdownTimer = ({ countdownTimestampMS, title }) => {
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
};

export default CountdownTimer;
