import { Box, Skeleton } from "@mui/material";

const LoadingTableItems = ({ numberOfRows }: { numberOfRows?: number }) => {
  return (
    <>
      {[...Array(numberOfRows || 5)].map((_, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid #DDDDDD",
            padding: "10px 0px",
          }}
        >
          <Skeleton animation="wave" height={60} />
        </Box>
      ))}
    </>
  );
};

export default LoadingTableItems;
