import './Clock.css'

import { useState, useEffect } from "react";

function getTime(d){

    const ret = {

    }

    //secondi
    const secs = d.getSeconds().toString().padStart(2, '0')
   
    ret.firstSecond = secs.charAt(0)
    ret.secondSecond = secs.charAt(1)

    //minuti
    const min = d.getMinutes().toString().padStart(2, '0')
   
    ret.firstMinute = min.charAt(0)
    ret.secondMinute = min.charAt(1)

    //secondi
    const hours = d.getHours().toString().padStart(2, '0')

    ret.firstHour = hours.charAt(0)
    ret.secondHour = hours.charAt(1)
    
    return ret;
}

function Clock(){

    const t = Date.now()

    const dateIni = new Date(t);

    const defaultTime = getTime(dateIni)

    const [date, setDate] = useState(dateIni);

    //secondi
    const [firstSecond, setFirstSecond] = useState(defaultTime.firstSecond)
    const [secondSecond, setSecondSecond] = useState(defaultTime.secondSecond)

    //minuti
    const [firstMinute, setFirstMinute] = useState(defaultTime.firstMinute)
    const [secondMinute, setSecondMinute] = useState(defaultTime.secondMinute)

    //ore
    const [firstHour, setFirstHour] = useState(defaultTime.firstHour)
    const [secondHour, setSecondHour] = useState(defaultTime.secondHour)

    useEffect(() => {

        const interval = setInterval(() => {
            const time = date.getTime() + 1000;
            const d = new Date(time)
            const defaultTime = getTime(dateIni)

            //secondi


            if(secondSecond !== defaultTime.secondSecond){
                setSecondSecond(defaultTime.secondSecond)
            }

            //minuti

            if (firstMinute !== defaultTime.firstMinute) {
                setFirstMinute(defaultTime.firstMinute)
            }

            if (secondMinute !== defaultTime.secondMinute) {
                setSecondMinute(defaultTime.secondMinute)
            }

            //ore

            if (firstHour !== defaultTime.firstHour) {
                setFirstHour(defaultTime.firstHour)
            }

            if (secondHour !== defaultTime.secondHour) {
                setSecondHour(defaultTime.secondHour)
            }
            
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