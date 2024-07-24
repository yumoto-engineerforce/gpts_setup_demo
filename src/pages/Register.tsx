import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
}

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm Password is required")
});

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // TODO: Add registration logic here
  };

  return (
    <FormContainer maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("username")}
          label="Username"
          margin="normal"
          fullWidth
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ""}
        />
        <TextField
          {...register("password")}
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <TextField
          {...register("confirmPassword")}
          label="Confirm Password"
          type="password"
          margin="normal"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </FormContainer>
  );
};

export default Register;
