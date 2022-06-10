// import { useState, useEffect } from 'react';
import React from 'react'
import {createUseStyles} from 'react-jss'


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
        margin: '30px',
        flexDirection: 'column',
        fontFamily: 'Overpass, sans-serif',
        '& h1': {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '3vw'
        },
    }

})

const UserTime = () => {
    const classes = useStyles()
    function getDateTime(DateTime)
    {
        console.log(DateTime);
    }

    return(
        <div className={classes.sign}>
            <form>
                <label for="CountdowntEnd">Countdown (date and time):</label>
                <input type="datetime-local" onChange={getDateTime}></input>
                <input type="submit" value="Submit"></input>
            </form>

        </div>
    );
}

export default UserTime;