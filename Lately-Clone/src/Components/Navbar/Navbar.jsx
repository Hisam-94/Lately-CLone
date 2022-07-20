import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import styles from "../Navbar/navbar.module.css";

const Nav = [
  {
    to: "/product",
    title: "Products",
  },
  {
    to: "/resources",
    title: "Resources",
  },
  {
    to: "/company",
    title: "Company",
  },
  {
    to: "/pricing",
    title: "Pricing",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navSticky}>
      <Flex
        alignItems={"center"}
        border="1px"
        borderColor="gray.200"
        padding="1em 6em 1em 6em"
        h={"10hv"}
        // zIndex={99999}
      >
        <Box mr="2em">
          <Link to="/">
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg"
              w="8em"
            />
          </Link>
        </Box>
        <Box>
          {Nav.map((el) => (
            <NavLink
              style={{ marginLeft: "1em", display: "inline-block" }}
              key={el.title}
              to={el.to}
            >
              <Flex alignItems={"center"}>
                {el.title}
                <span style={{ marginLeft: "0.5em" }}>{<HiChevronDown />}</span>
              </Flex>
            </NavLink>
          ))}
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup>
            <Link to="/signup">
              <Button
                className="nav-btn-getStarted"
                _hover={{ bgColor: "#00c66b", color: "white" }}
                bgColor={"white"}
                color="#00c66b"
                border={"2px solid #00c66b"}
              >
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" _hover={{ color: "#00c66b" }}>
                LOG IN{" "}
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
