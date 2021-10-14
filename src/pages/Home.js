import React from "react";
import AboutUs from "../components/AboutUs";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
