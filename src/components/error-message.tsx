import { FC } from "react";

export const ErrorTitle: FC<{ error: Error }> = ({ error }) => {
  return <>{error.name}</>;
};

export const ErrorMessage: FC<{ error: Error }> = ({ error }) => {
  return <>{error.message}</>;
};
