import './App.css';
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({

    app: {
      margin: '0',
      padding: '0',
      height: '100vh',
      background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(148,187,233,1) 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& a': {
        color: '#ffffff',
        textDecoration: 'none'
      },
    },
    nav: {
      marginBottom: '50px'
    },
    navButton: {
      display: 'flex',
      justifyContent: 'center',
      background: 'linear-gradient(270deg, #054217, #0e3911)',
      color: '#ffffff',
      textShadow: '1px 1px 2px',
      borderRadius: '15px',
      border: '2px solid #9c9c9c',
      boxShadow: '0 0 2px 2px',
      padding: '2vw',
      flexDirection: 'column',
      fontFamily: 'Overpass, sans-serif',
      margin: '10px',
      alignItems: 'center'
    }


})

function App() {
  const classes = useStyles()

  return (

    <div className={classes.app}>
    <nav className={classes.nav}>
      <Link className={classes.navButton} to="/">Home</Link>
      <Link className={classes.navButton} to="/countdowntimer">Countdown Timer</Link>
    </nav>
    <Outlet />
    </div>
  );
}

export default App;
