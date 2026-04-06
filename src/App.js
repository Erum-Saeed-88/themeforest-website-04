import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services"

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;