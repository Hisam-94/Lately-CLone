import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AdvSec_1 from "./AdvSec - 1/AdvSec_1";
import AdvSec_2 from "./AdvSec - 2/AdvSec_2";
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
      <AdvSec_2/>
      <Footer/>
    </div>
  );
};

export default Home;
