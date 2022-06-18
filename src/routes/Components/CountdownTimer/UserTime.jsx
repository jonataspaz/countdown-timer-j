import React, { useState, useRef, useEffect } from 'react'
import { Calendar } from 'react-date-range'
import {createUseStyles} from 'react-jss'
import format from 'date-fns/format'
import { getCalenderTime } from './CountdownTimer'
import dayjs from 'dayjs'
// import CountdownTimer from './CountdownTimer'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const useStyles = createUseStyles({
    
    sign: {
        display: 'flex',
        width: '',
        justifyContent: 'center',
        background: "linear-gradient(270deg, #054217, #0e3911)",
        color: '#ffffff',
        textShadow: '1px 2px 2px',
        borderRadius: '15px',
        boxShadow: '0 0 5px 5px',
        margin: '30px',
        fontFamily: 'Overpass, sans-serif',
        '& h1': {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '10px'
        },
    },
    inputBox: {
        fontSize: '22px',
        padding: '5px 8px 4px 8px',
        borderRadius: '3px',
        border: '1px solid #667'
    },
    calendarWrap: {
        display: 'inline-block',
        position: 'relative',
        background: "linear-gradient(270deg, #054217, #0e3911)"

    },
    calendarElement: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '40px',
        border: '1px solid #ccc',
        zIndex: '999',
        color: '#ffffff'
        
    }

})

const UserTime = () => {
    const classes = useStyles();

    const [calendar, setCalendar] = useState('');
    const [Mstime, setMsTime] = useState('');


    const [open, setOpen] = useState(false);

    const refOne = useRef(null);

    useEffect(() => {
        setCalendar(format(new Date(), 'dd/MM/yyyy'));
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])


    const hideOnClickOutside = (e) => {
        if ( refOne.current && !refOne.current.contains(e.target) ) {
            setOpen(false);
        }
    };
    const handleSelect = (date) => {
        setCalendar(format(date, 'dd/MM/yyyy'));
        setMsTime(format(date, 'yyyy-MM-dd'));

    };
    getCalenderTime(dayjs(`${Mstime}`).valueOf())
    
    return(
        <div className={classes.sign}>
            <div className={classes.calendarWrap}>

                <input
                    value={ calendar }
                    readOnly
                    className={classes.inputBox}
                    onClick={ () => setOpen(open => !open) }
                />
                <div ref={refOne}>
                    {open &&
                        <Calendar

                            onChange = { handleSelect }
                            className={classes.calendarElement}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default UserTime