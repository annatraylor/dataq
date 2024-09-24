import React from "react";
import Banner from "../banner/Banner";
// sections:
import PageForm from "./form";
import About from "./about";
import Websites from "./websites";
import Articles from "./carousel";
import ScrollToTop from "./ScrollUp"; 


const AllComponents = () => {
  return (
    <div>
      <Banner />
      <About />
      <Websites />
      <Articles />
      <PageForm />
      <ScrollToTop />
    </div>
  );
};

export default AllComponents;
