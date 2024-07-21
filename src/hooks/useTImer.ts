import { useEffect, useState } from "react";

export const useTimer = ({ initialUnixTime }: { initialUnixTime: number }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(initialUnixTime));
  const hasStarted =
    timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;
  const now = Math.floor(Date.now() / 1000);

  const isOneMinutePast = now >= initialUnixTime + 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(initialUnixTime));
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUnixTime]);

  function calculateTimeLeft(initialUnixTime: number) {
    const difference = initialUnixTime - now;

    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    return { hours, minutes, seconds };
  }

  return { hasStarted, isOneMinutePast };
};
