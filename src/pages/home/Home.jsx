import React from "react";
import FifthSection from "../../components/fifthSection/FifthSection";
import FirstSection from "../../components/firstSection/FirstSection";
import Footer from "../../components/footer/Footer";
import FourthSection from "../../components/fourthSection/FourthSection";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SecondSection from "../../components/secondSection/SecondSection";
import ThirdSection from "../../components/thirdSection/ThirdSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
