import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
`;

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          GPTS Setup Demo
        </Typography>
        <StyledLink to="/login">
          <Button color="inherit">Login</Button>
        </StyledLink>
        <StyledLink to="/register">
          <Button color="inherit">Register</Button>
        </StyledLink>
        <StyledLink to="/dashboard">
          <Button color="inherit">Dashboard</Button>
        </StyledLink>
        {/* 他のリンクもここに追加します */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
