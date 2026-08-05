import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';
const TimerChallenge = ({ title, targetTime }) => {

    let timer = useRef();
    let dialog = useRef();

    let [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);           
        dialog.current.open();    
    };
    
    let handleReset = () => {
        setTimeRemaining(targetTime * 1000);   
    };

    let handleClick = () => {
        timer.current = setInterval(() => {
           setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    let handleStop = () => {
        // clearTimeout(timer.current);
        dialog.current.open();
        clearInterval(timer.current)
        console.log("Stopped...")
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timerExpired && <p>You lost!</p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleClick}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
