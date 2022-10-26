import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [authModal, setAuthModal] = useState<Boolean>(false);

  return (
    <AppBar position="static" sx={{ bgcolor: "#ffffff", boxShadow: "none" }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          paddingX: 2,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          color="primary"
          sx={{
            mr: 2,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Graphene GraphQL Client
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button variant="outlined" onClick={() => setAuthModal(true)}>
            Sign In / Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
