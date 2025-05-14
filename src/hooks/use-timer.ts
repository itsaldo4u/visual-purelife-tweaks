
import { useState, useEffect } from 'react';

interface UseTimerProps {
  initialTime: number;
  interval?: number;
  autoStart?: boolean;
}

export function useTimer({
  initialTime,
  interval = 1000,
  autoStart = false,
}: UseTimerProps) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && !isPaused && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, interval);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, isPaused, time, interval]);

  const start = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  const stop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    time,
    isRunning,
    isPaused,
    start,
    pause,
    resume,
    stop,
    formatTime,
  };
}
