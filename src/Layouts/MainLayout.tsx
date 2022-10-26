import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container sx={{ flexGrow: 1, paddingY: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
