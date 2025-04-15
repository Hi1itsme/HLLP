import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { What_Is_It } from "./components/what_Is_It";
import { Ethics } from "./components/ethics";
import { Economy } from "./components/economy";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <What_Is_It data={landingPageData.what_Is_It} />
      <Ethics data={landingPageData.Ethics} />
      <Economy data={landingPageData.Economy} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
