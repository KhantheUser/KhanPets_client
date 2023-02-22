import React from "react";
import About from "../../components/About/About";
import Banner_Info from "../../components/Banner_Info/Banner_Info";
import Banner_Video from "../../components/Banner_Video/Banner_Video";
import CardList from "../../components/CardList/CardList";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Promises from "../../components/Promise/Promise";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Carousel />
      <About />
      <Promises />
      <CardList />
      <Banner_Video />
      <Banner_Info />
      <Footer />
    </div>
  );
}

export default HomePage;
