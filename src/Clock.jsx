import './Clock.css'

import { useState, useEffect } from "react";

function Clock(){

    const t = Date.now()

    const dateIni = new Date(t);

    const [date, setDate] = useState(dateIni);

    //secondi
    const [firstSecond, setFirstSecond] = useState(0)
    const [secondSecond, setSecondSecond] = useState(0)

    //minuti
    const [firstMinute, setFirstMinute] = useState(0)
    const [secondMinute, setSecondMinute] = useState(0)

    //ore
    const [firstHour, setFirstHour] = useState(0)
    const [secondHour, setSecondHour] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            const time = date.getTime() + 1000;
            const d = new Date(time)

            //secondi
            const secs = d.getSeconds().toString().padStart(2, '0')
            setFirstSecond(secs.charAt(0))
            setSecondSecond(secs.charAt(1))

            //minuti
            const min = d.getMinutes().toString().padStart(2, '0')
            setFirstMinute(min.charAt(0))
            setSecondMinute(min.charAt(1))

            //secondi
            const hours = d.getHours().toString().padStart(2, '0')
            setFirstHour(hours.charAt(0))
            setSecondHour(hours.charAt(1))
            
            setDate(d)
        }, 1000);

        return () => {

            clearInterval(interval)
        }
    }, [date])

    return(
        <div className="clock">
            <div className="hours">
                <div className="first">
                    <div className="number">{firstHour}</div>
                </div>
                <div className="second">
                    <div className="number">{secondHour}</div>
                </div>
            </div>
            <div className="tick">:</div>
            <div className="minutes">
                <div className="first">
                    <div className="number">{firstMinute}</div>
                </div>
                <div className="second">
                    <div className="number">{secondMinute}</div>
                </div>
            </div>
            <div className="tick">:</div>
            <div className="seconds">
                <div className="first">
                    <div className="number">{firstSecond}</div>
                </div>
                <div className="second infinite">
                    <div className="number">{secondSecond}</div>
                </div>
            </div>
        </div>

    )
}

export default Clock;