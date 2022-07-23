import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import AbtSection from "./AbtSection";
import AI_Content from "./AI_Content";
import Card1 from "./Card1";
import Card2 from "./Card2";
import ImageCard from "./ImageCard";
import ProductTopSection from "./ProductTopSection";
import Results from "./Results";
import SocialAiSection from "./SocialAiSection";
import Text from "./Text";
import Footer from "../Footer/Footer"
import AdvSec_2 from "../Home/AdvSec - 2/AdvSec_2";

const AI_Brain = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg",
  heading: "Feeding the Lately A.I. Brain",
  description:
    "Upload longform content files like blogs, webpages, news articles, white papers, newsletters or any kind of text imaginable. You can also upload audio and video like podcasts, workshops, conference panels, keynotes and more. We'll then automatically transcribe your audio and video files for the brain to ingest.",
};
const Unc = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg",
  heading: "Unlock the Gold",
  description:
    "In minutes, Lately transforms your longform content into dozens or even hundreds of quotes that our A.I. knows will get you the highest engagement. Users have the opportunity to edit and enhance all quotes, which, in the case of video files, include the matching video clips of the speakers voicing the text of each quote.",
};
const SocialM = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg",
  heading: "Social Media Marketing",
  description:
    "Accelerates the preparation, approvals and scheduling steps needed to publish droves of social media posts across your channels.",
};
const SocialS = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg",
  heading: "Social Selling",
  description:
    "Ensures messaging is on point as you scale your social media content across sales teams, executives and employees.",
};
const SocialMA = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c543d22be5e1c68aaf2_SocialMediaAnalytics-01.svg",
  heading: "Social Media Analytics",
  description:
    "Gives you performance analytics for each piece of social media content and helps you shape your A.I. writing model to constantly improve your shortform content.",
};

const ASI = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a107354a9a53719df14e_Icon_Circles_AI.svg",
  heading: "Artificial Social Intelligence Engine",
  description:
    "Our AI constantly learns from your past social media posts and builds a writing model based on what is most engaging for your audience.",
};
const Parent_Child = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a106b3d5038e3fa9b20f_Icon_Circles_Parent_Child.svg",
  heading: "Parent-Child Accounts",
  description:
    "Make it easy to manage, publish and analyze all of your social media content across multiple products, brands, regions, franchises, and users all from one centralized place.",
};
const Right_pricing = {
  img: "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a1073d22be4b6068b0ff_Icon_Circles_Pricing.svg",
  heading: "Just-right Pricing",
  description:
    "Whether you’re just starting to scale your social media marketing program or you’re ready to extend it across executives and sales teams, we have an edition right-sized for your needs.",
};

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductTopSection />
      <SocialAiSection />
      <AI_Content />
      <Card1
        image={AI_Brain.img}
        heading={AI_Brain.heading}
        description={AI_Brain.description}
      />
      <Card2
        image={Unc.img}
        heading={Unc.heading}
        description={Unc.description}
      />
      <Card1
        image={SocialM.img}
        heading={SocialM.heading}
        description={SocialM.description}
      />
      <Card2
        image={SocialS.img}
        heading={SocialS.heading}
        description={SocialS.description}
      />
      <Card1
        image={SocialMA.img}
        heading={SocialMA.heading}
        description={SocialMA.description}
      />
      <Text />
      <Flex justifyContent='center' bgColor={'#e6f6ef'}>
        <ImageCard
          image={ASI.img}
          heading={ASI.heading}
          description={ASI.description}
        />
        <ImageCard
          image={Parent_Child.img}
          heading={Parent_Child.heading}
          description={Parent_Child.description}
        />
        <ImageCard
          image={Right_pricing.img}
          heading={Right_pricing.heading}
          description={Right_pricing.description}
        />
      </Flex>
      <AbtSection/>
      <Results/>
      <AdvSec_2/>
      <Footer/>
    </div>
  );
};

export default Product;
