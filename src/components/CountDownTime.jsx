// CountdownTimer.js
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import moment from "moment";

const CountdownTimer = ({ specifyTime, onReloadPage }) => {
  const specifiedMoment = moment(specifyTime, "YYYY-MM-DD HH:mm:ss");
  const [remainingTime, setRemainingTime] = useState(
    specifiedMoment.diff(moment(), "seconds")
  );
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  useEffect(() => {
    if (remainingTime < 0) {
      onReloadPage?.();
    }
  }, [remainingTime, onReloadPage])

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setRemainingTime(specifiedMoment.diff(moment(), "seconds"));
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Remaining time: {remainingTime} seconds</p>
      {/* <Button onClick={handleStart}>Start</Button>
      <Button onClick={handlePause}>Pause</Button>
      <Button onClick={handleReset}>Reset</Button> */}
    </div>
  );
};

export default CountdownTimer;
