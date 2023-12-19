import React, { useState, useEffect } from 'react';

interface ICountdownTimerProps {
  initialTime: number;
}

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const CountdownTimer = ({ initialTime }: ICountdownTimerProps) => {
  const [time, setTime] = useState(initialTime * 60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return <p className="font-bold text-3xl">{formatTime(time)}</p>;
};

export default CountdownTimer;
