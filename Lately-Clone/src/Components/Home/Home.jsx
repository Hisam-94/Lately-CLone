import React from "react";
import Navbar from "../Navbar/Navbar";
import AdvSec_1 from "./AdvertisementSec - 1/AdvSec_1";
import LogoBar from "./Logo Bar/LogoBar";
import ResultSection from "./ResultSection/ResultSection";
import TopSection from "./TopSection/TopSection";
import VideoSection from "./VideoSection/VideoSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <LogoBar />
      <VideoSection/>
      <ResultSection/>
      <AdvSec_1/>
    </div>
  );
};

export default Home;
