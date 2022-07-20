import React, { useState } from "react";
import { Container, FormLabel, Input } from "@chakra-ui/react";

const SignUp = () => {
  const [formData, setFormData] = useState([
    {
      f_name: "",
      l_name: "",
      email: "",
      password: "",
      conf_password: "",
    },
  ]);

  const handleChange = ({ target }) => {
    const { name, value } = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
          />
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormLabel>Password (must be at least 8 character)</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            name="conf_password"
            value={formData.conf_password}
            onChange={handleChange}
          />
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
