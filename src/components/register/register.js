import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Title } from "./StyledFormComponents";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/user/register", user)
      .then((response) => {
        alert("Registraton is successful");
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error("faild to register", err);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Register</Title>
      {/* {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Registration Successful!</SuccessMessage>} */}
      <Input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <Input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      {/* Add other input fields as necessary */}
      <Button type="submit">Register</Button>
    </Form>
  );
};
export default Register;
