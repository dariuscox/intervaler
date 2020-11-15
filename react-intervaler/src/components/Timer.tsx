import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [secondsDisplayed, setSecondsDisplayed] = useState(0);
  const [secondsInput, setSecondsInput] = useState(0);
  const [minutesInput, setMinutesInput] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setSecondsDisplayed(0);
    setMinutes(0);
    setIsActive(false);
  }

  function setTimer() {
    let timer = 0;
    if (!minutesInput){ 
      setMinutesInput(0);
    }
    timer = (minutesInput*60) + secondsInput;
    setSeconds(timer)
    setMinutes(Math.floor(timer/60));
    setSecondsDisplayed(secondsDisplayed => (timer - (minutesInput*60)));
    console.log(minutes)
    console.log(seconds)
    console.log(timer)
  }

  useEffect(() => {
    let interval = setInterval(() => {console.log('set_interval')}, 1000);
    if (isActive) {
      if (secondsDisplayed === 0 && seconds <0){
        console.log(seconds)
        reset()
      }
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
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
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Minutes" 
              onChange={e => setMinutesInput( parseInt(e.target.value ))}
              />
            </Col>
            <Col>
              <Form.Control placeholder="Seconds" 
              onChange={e => setSecondsInput(parseInt( e.target.value ))}
              />
            </Col>
          </Row>
        </Form>
        <button className="button" onClick={setTimer}>
                Set Timer
        </button>
      </div>
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

export default Timer;