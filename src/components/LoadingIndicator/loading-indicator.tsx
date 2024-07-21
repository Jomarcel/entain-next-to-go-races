import { CircularProgress, Stack } from "@mui/material";

export const LoadingIndicator = () => {
  return (
    <Stack m={3} alignItems="center" spacing={5}>
      {" "}
      <CircularProgress />{" "}
    </Stack>
  );
};
