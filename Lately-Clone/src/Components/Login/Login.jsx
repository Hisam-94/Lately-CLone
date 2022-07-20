import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "../Login/login.module.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    let res = await axios
      .post("https://reqres.in/api/login", {
        username: email,
        email: email,
        password: email,
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setToken(null);
      });
  };
  if (token) {
    navigate("/");
  }
  return (
    <div>
      <div className={styles.navSticky}>
        <Box>
          <Link to="/">
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg"
              w="7em"
            />
          </Link>
        </Box>
      </div>
      <Stack bgColor="#e4f2ea" h="510px">
        <Container textAlign={"start"} mt="5em">
          <Heading>Log In</Heading>
          <Text fontSize={"2xl"} mb="0.5em">
            Hello, Superyou.
          </Text>
          <hr style={{ borderColor: "grey.200" }} />
          <Flex mt="2em" alignItems={"center"}>
            <FormLabel ml="2em">Email or Username</FormLabel>
            <Input
              type="text"
              value={email}
              placeholder="Email or Username"
              w="60%"
              position="static"
              variant={"outline"}
              borderColor="grey"
              borderWidth="3px"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex
            justify={"space-between"}
            alignItems="center"
            p="1em"
            ml={"10.3em"}
            mt="1em"
          >
            <Button
              _hover={{ bgColor: "#515151", color: "white" }}
              bgColor={"#666666"}
              color="white"
              w="100px"
              position="static"
              onClick={handleLogin}
            >
              LOG IN
            </Button>
            <a
              style={{ color: "blue", cursor: "pointer" }}
              _hover={{ textDecoration: "none" }}
              target="_blank"
            >
              Forgot Password?
            </a>
          </Flex>
        </Container>
      </Stack>
    </div>
  );
};

export default Login;
