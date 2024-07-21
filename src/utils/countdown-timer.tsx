import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function calculateTimeLeft(initialUnixTime: number) {
  const now = Math.floor(Date.now() / 1000);
  const difference = initialUnixTime - now;

  if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

  const hours = Math.floor(difference / 3600);
  const minutes = Math.floor((difference % 3600) / 60);
  const seconds = difference % 60;

  return { hours, minutes, seconds };
}

export const CountdownTimer = ({
  initialUnixTime,
}: {
  initialUnixTime: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(initialUnixTime));
  const hasStarted =
    timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(initialUnixTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [initialUnixTime]);

  if (hasStarted)
    return (
      <Typography color={(theme) => theme.palette.success.light}>
        Race has started
      </Typography>
    );

  return (
    <div>
      <Typography
        color={(theme) => theme.palette.error.light}
      >{`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</Typography>
    </div>
  );
};
