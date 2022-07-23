import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Company/contactsection.module.css";

const ContactSection = () => {
  const ContactData = [
    {
      department: "Customer Support",
      email: "support@lately.ai",
    },
    {
      department: "Sales & Partnerships",
      email: "sales@lately.ai",
    },
    {
      department: "Press Inquiries",
      email: "press@lately.ai",
    },
  ];
  return (
    <Box className={styles.mainBox}>
      <Box>
        <Heading mb={"1.5em"}>Contact us</Heading>
      </Box>
      <Flex justify={"center"} gap="2em">
        {ContactData.map((el) => (
          <Box className={styles.box} shadow={"md"}>
            <Heading fontSize={"23px"} mb="0.5em">
              {el.department}
            </Heading>
            <Link to={"#"}>
              <Text color={"#71c486"} as="b" fontSize={"xl"}>
                {el.email}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ContactSection;
