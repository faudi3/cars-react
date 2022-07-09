import React from 'react';
import '../clock.scss';
const Clock = () => {
  const secondHand = React.useRef();
  const hourHand = React.useRef();
  const minuteHand = React.useRef();

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const secondsDegrees = (( seconds / 60) * 360) +90;
    const hoursDegrees = (( hours / 12) * 360) +90;
    const minutesDegrees = (( minutes / 60) * 360) +90;


    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.current.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.current.style.transform = `rotate(${minutesDegrees}deg)`;
  }

  

  setInterval(setDate, 1000);
  return (
    <div className="clock">
      <div className="clock-face">
        <div ref={hourHand}
              className="hand hour-hand"></div>
        <div ref={minuteHand}
              className="hand min-hand"></div>
        <div ref={secondHand} className="hand sec-hand"></div>
      </div>
    </div>
  );
}

export default Clock;
