import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [secondsDisplayed, setSecondsDisplayed] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setSecondsDisplayed(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = setInterval(() => {console.log('set_interval')}, 1000);
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        let newMinutes = Math.floor(seconds/60);
        setMinutes(minutes => newMinutes);
        setSecondsDisplayed(secondsDisplayed => seconds - (newMinutes*60));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, secondsDisplayed]);

  return (
    <div className="app">
      <div className="time">
        {minutes}m {secondsDisplayed}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;