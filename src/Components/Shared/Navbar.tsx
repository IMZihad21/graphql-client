import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

const Navbar = () => {
  const [authModal, setAuthModal] = useState<boolean>(false);

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
      {authModal && <Auth open={authModal} setOpen={setAuthModal} />}
    </AppBar>
  );
};

export default Navbar;
