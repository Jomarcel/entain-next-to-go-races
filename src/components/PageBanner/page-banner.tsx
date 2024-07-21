import { Box } from "@mui/material";

const PageBanner = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        objectFit: "cover",
        mb: 5,
      }}
      component="img"
      src={`/images/neds-banner-image.jpeg`}
      alt="hero-image"
    />
  );
};

export default PageBanner;
