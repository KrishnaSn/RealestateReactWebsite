import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Best } from "./components/best/Best";
import { Featured } from "./components/featured/Featured";
import { Footer1 } from "./components/footer/Footer1";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer1/>
    </>
  );
}

export default App;
