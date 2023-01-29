import React, { useState, useEffect } from "react";

const Countdown = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <h1>Time left: {timeLeft} seconds</h1>
    </div>
  );
};

export default Countdown;
