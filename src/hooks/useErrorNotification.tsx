import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { ErrorMessage } from "../components";

interface ErrorNotification {
  isError: boolean;
  error: Error;
}

export const useErrorNotification = ({ isError, error }: ErrorNotification) => {
  useEffect(() => {
    if (isError) {
      enqueueSnackbar(<ErrorMessage error={error} />, { variant: "error" });
    }
  }, [isError]);
};
