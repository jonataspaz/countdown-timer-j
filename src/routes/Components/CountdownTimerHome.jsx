import { createUseStyles } from 'react-jss';
import CountdownTimer from './CountdownTimer/CountdownTimer';

const useStyles = createUseStyles({
  page: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function CountdownTimerHome() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div>
        <CountdownTimer countdownTimestampMS={1661904000000} title="Dev Academy" />
      </div>
    </div>
  );
}

export default CountdownTimerHome;
