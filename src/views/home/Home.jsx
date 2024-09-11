import React from "react";
import Header from "./sections/Header";
import "./Home.css";
import About from "./sections/About";
import ListConsultationLink from "./sections/ListConsultationLink";
import Specialities from "./sections/Specialities";
import Faqs from "./sections/Faqs";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div id="bodyHome">
      <Header />
      <About />
      <ListConsultationLink />
      <Specialities />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
