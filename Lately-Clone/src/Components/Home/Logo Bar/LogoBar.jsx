import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const imageData = [
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899d43bfa7a25f8fd57_logo_amerifirst_x.png",
    alt: "amerifirst",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8992c91187ad248ca38_logo_vayner_x.png",
    alt: "vayner media",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8995d4cba780af3d126_logo_husky_x.png",
    alt: "husky",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdfb04119999916a1844b1_logo_sap_x3.png",
    alt: "sap",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899f52edc178bc1bae6_logo_dhl_x.png",
    alt: "dhl",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6054c974c47a07d324e73c9a_pwc3.png",
    alt: "pwc",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6127a82ecc42c1a55293539e_googlecloud.png",
    alt: "g_cloud",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899fdfd512e168afc71_logo_ss_x.png",
    alt: "supporting stg",
  },
  {
    src: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60913dc77992896344096de0_sy-p-2000.png",
    alt: "stream yard",
  },
];

const LogoBar = () => {
  return (
    <div>
      <Box>
        <Flex justify={"space-around"} p="2em 5em 2em 5em">
          {imageData.map((el) => (
            <Image src={el.src} alt={el.alt} h="30px" />
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default LogoBar;
