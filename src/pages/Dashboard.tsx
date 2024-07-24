import React from "react";
import { Container, Typography } from "@mui/material";
import Button from "../components/atoms/Button";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" color="primary">
        Example Button
      </Button>
      {/* 他のダッシュボード要素をここに追加します */}
    </Container>
  );
};

export default Dashboard;
