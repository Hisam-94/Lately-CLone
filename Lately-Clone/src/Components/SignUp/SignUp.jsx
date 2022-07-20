import React, { useState } from "react";
import {
  Container,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  Box,
  Spacer,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import Styles from "../SignUp/signup.module.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Captcha from "./Captcha";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState([
    {
      f_name: "",
      l_name: "",
      email: "",
      password: "",
      conf_password: "",
    },
  ]);

  const [signUpData, setSignUpData] = useState([]);
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpData([...signUpData, formData]);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  const toast = useToast();

  return (
    <div style={{ backgroundColor: "#f7f9fb" }}>
      <Flex>
        <Container textAlign={"start"} mt="6em">
          <Text fontSize={"3xl"}>Welcome to Lately!</Text>
          <Text w={"600px"} mb="1em">
            The world's most human A.I. is waiting for you - start your free
            7-day trial today!
          </Text>
          <form onSubmit={handleSubmit}>
            <Flex>
              <Box>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="f_name"
                  value={formData.f_name}
                  onChange={handleChange}
                  borderColor="pink.200"
                  borderWidth={"1px"}
                />
              </Box>
              <Spacer />
              <Box>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="l_name"
                  value={formData.l_name}
                  onChange={handleChange}
                  borderColor="pink.200"
                  borderWidth={"1px"}
                />
              </Box>
            </Flex>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              borderColor="pink.200"
              borderWidth={"1px"}
            />
            <FormLabel>Password (must be at least 8 character)</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              borderColor="pink.200"
              borderWidth={"1px"}
            />
            <FormLabel>Confirm password</FormLabel>
            <Input
              type="password"
              name="conf_password"
              value={formData.conf_password}
              onChange={handleChange}
              borderColor="pink.200"
              borderWidth={"1px"}
            />
            <Box mt={"1em"}>
              <Captcha />
            </Box>
            <Button
              bgColor={"#71c486"}
              color={"white"}
              _hover="none"
              w={"120px"}
              mt="1em"
              type="submit"
            >
              Next
            </Button>
          </form>
        </Container>
        <Container
          mt="11em"
          border="1px"
          borderColor={"gray.300"}
          borderRadius="1em"
          h={"-webkit-fit-content"}
          p="1em 1em"
        >
          <Box>
            <Text textAlign={"start"} fontSize="3xl" lineHeight={"1.2em"}>
              <span style={{ color: "green", fontWeight: "500" }}>
                Lately is an A.I.-powered content creation engine
              </span>
              that learns your brand voice and which words will generate you the
              most leads.
            </Text>
            <Image
              src="https://app.lately.ai/img/flask.be3f323f.gif"
              bgColor={"#20c763"}
              borderRadius="50%"
              w={"90px"}
              position="relative"
              top="30px"
              left={"40%"}
              mt="-20px"
            />
          </Box>
          <Box
            h={"100px"}
            bgColor="#f2f2f2"
            p={"-10px"}
            m="-16px"
            borderBottomRadius={"1em"}
          ></Box>
        </Container>
      </Flex>
      <Box display={"flex"} justifyContent="end" className={Styles.helpSticky}>
        <Button
          rounded={"full"}
          w="100px"
          bgColor={"#20c76e"}
          fontWeight="bold"
        >
          {<AiOutlineQuestionCircle style={{ marginRight: "0.5em" }} />}Help
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
