import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cta from "./components/Cta";
import Features from "./components/Features";
import What from "./components/What";
import Price from "./components/Price";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="cap">
      <Header />
      <Cta />
      <Features />
      <What />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
