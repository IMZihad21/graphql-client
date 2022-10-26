import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

interface LoaderProps {
  fullPage?: boolean;
}

const Loader: FC<LoaderProps> = ({ fullPage }) => {
  const loaderStyle = {
    width: fullPage ? "100vw" : "100%",
    height: fullPage ? "100vh" : "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box style={loaderStyle}>
      <CircularProgress
        sx={{
          color: "#000",
        }}
        size={100}
      />
    </Box>
  );
};

export default Loader;
