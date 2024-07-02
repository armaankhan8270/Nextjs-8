import React from "react";
import Header from "./Header";
import Statistcs from "./Statistcs";
import About from "./About";
import Remote from "./remote";
import Step from "./Step";
import Feature from "./Feature";
import Testoomial from "./Testoomial";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Statistcs />
      <About />
      <Remote />
      <Step />
      <Feature />
      <Testoomial />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default Home;
