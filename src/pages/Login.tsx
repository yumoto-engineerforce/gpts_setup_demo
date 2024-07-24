import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";

interface IFormInput {
  username: string;
  password: string;
}

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // TODO: Add authentication logic here
  };

  return (
    <FormContainer maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("username", { required: true })}
          label="Username"
          margin="normal"
          fullWidth
        />
        <TextField
          {...register("password", { required: true })}
          label="Password"
          type="password"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </FormContainer>
  );
};

export default Login;
