import {
  Box,
  color,
  Flex,
  Heading,
  Image,
  StylesProvider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Footer/footer.module.css";

const Data = {
  company: [
    {
      link: "About",
    },
    {
      link: "Leadership",
    },
    {
      link: "Professional Services",
    },
    {
      link: "Press & News",
    },
    {
      link: "Contact Us",
    },
  ],
  patner: [
    {
      link: "HubSpot Marketing Hub",
    },
    {
      link: "Hootsuite",
    },
    {
      link: "UpContent",
    },
  ],
  product: [
    {
      link: "Pricing",
    },
    {
      link: "Product Overview",
    },
    {
      link: "AI Social Content Writer",
    },
    {
      link: "Social Media Marketing",
    },
    {
      link: "Social Selling",
    },
    {
      link: "Social Media Analytics",
    },
    {
      link: "Sample AI Autogenerator",
    },
    {
      link: "Autogenerator Chrome Extension",
    },
    {
      link: "Parent Accounts",
    },
  ],
  resources: [
    {
      link: "Customer Stories",
    },
    {
      link: "Ebooks",
    },
    {
      link: "Blog",
    },
    {
      link: "Help Center",
    },
  ],
  office_hours: [
    {
      link: "Lately Office Hours Sign-Up",
    },
    {
      link: "Lately LIVE Replays",
    },
    {
      link: "How to Position ANYTHING",
    },
    {
      link: "Lately 101",
    },
  ],
  everySize: [
    {
      link: "Global Enterprises",
    },
    {
      link: "Franchises",
    },
    {
      link: "Small Businesses",
    },
  ],
  everyIndustry: [
    {
      link: "Technology",
    },
    {
      link: "Professional Services",
    },
    {
      link: "Financial Services",
    },
    {
      link: "Media & Entertainment",
    },
    {
      link: "News & Public Agencies",
    },
    {
      link: "Consumer Brands",
    },
    {
      link: "Education",
    },
    {
      link: "Healthcare & Pharma",
    },
    {
      link: "Social Media Agencies",
    },
  ],
};

const Footer = () => {
  return (
    <div>
      <Flex
        gap={"6em"}
        p="3em 7em"
        color={"#7d7d82"}
        fontSize="14px"
        lineHeight={"2em"}
      >
        <Box textAlign="start">
          <Box mb={"1em"}>
            <Heading size={"14px"}>COMPANY</Heading>
            {Data.company.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
          <Box>
            <Heading size={"14px"}>PARTNERS & INTEGRATIONS</Heading>
            {Data.patner.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
        </Box>
        <Box textAlign="start">
          <Heading size={"14px"}>PRODUCT</Heading>
          {Data.product.map((el) => (
            <div key={el.link}>
              <Text>
                <Link className={Styles.footer} to={"/"}>
                  {el.link}
                </Link>
              </Text>
            </div>
          ))}
        </Box>
        <Box textAlign={"start"}>
          <Box mb={"1em"}>
            <Heading size={"14px"}>RESOURCES</Heading>
            {Data.resources.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
          <Box>
            <Heading size={"14px"}>LATELY OFFICE HOURS</Heading>
            {Data.office_hours.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
        </Box>
        <Box textAlign={"start"}>
          <Heading size={"14px"} textAlign="start">
            INDUSTRIES
          </Heading>
          <Box mb={"1em"}>
            <Text as={"i"}>Every Size</Text>
            {Data.everySize.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
          <Box>
            <Text as={"i"}>Every Industry</Text>
            {Data.everyIndustry.map((el) => (
              <div key={el.link}>
                <Text>
                  <Link className={Styles.footer} to={"/"}>
                    {el.link}
                  </Link>
                </Text>
              </div>
            ))}
          </Box>
        </Box>
      </Flex>
      <Box p="0em 6em">
        <hr />
      </Box>
      <Flex justify={"space-between"} p="2em 6em">
        <Box>
          <Link to={"/"}>
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7e81a75428f60b5ff0d00_lately-footer-logo.svg"
              alt="footerLogo"
              w={"130px"}
            />
          </Link>
        </Box>
        <Box>
          <Flex gap={"0.5em"}>
            <a href="https://www.facebook.com/LatelyAI/">
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98ca57d5a01f8b06ac_lately-footer-facebook-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a href={"https://twitter.com/LatelyAI"}>
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d033dccb4e0c5c8a_lately-footer-twitter-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a href={"https://www.linkedin.com/company/latelyai/"}>
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98a46fb9298adb10cf_lately-footer-linkedin-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a href={"https://www.instagram.com/LatelyAI/"}>
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea981e42d6cdd21dc804_lately-footer-instagram-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a href={"https://www.youtube.com/LatelyAI"}>
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d97acfb972a65b4a_lately-footer-youtube-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a href={"https://www.tiktok.com/@latelyai"}>
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60199af29cf48909018c3acc_social_tiktok_grey.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
            <a
              href={
                "https://lately.us6.list-manage.com/subscribe?u=394b90fbf3c246b1fbbc04d87&id=ad9e7691eb"
              }
            >
              <img
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98852e65824bc54cf9_lately-footer-email-icon.svg"
                width={"30px"}
                alt="abc"
              />
            </a>
          </Flex>
        </Box>
      </Flex>
      <Flex justify={'space-between'} bgColor='#174c43' color={'#C0C0C0'} p='1.4em 7em' fontSize={'sm'}>
        <Text>Terms ● Privacy</Text>
        <Text>Copyright © 2022 Lately, Inc. Stone Ridge, NY, USA</Text>
      </Flex>
    </div>
  );
};

export default Footer;
