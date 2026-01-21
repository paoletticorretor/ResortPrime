import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import Diferenciais from "./components/landing/Diferenciais";
import Planta from "./components/landing/Planta";
import Comodidades from "./components/landing/Comodidades";
import Galeria from "./components/landing/Galeria";
import Localizacao from "./components/landing/Localizacao";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <Diferenciais />
      <Planta />
      <Comodidades />
      <Galeria />
      <Localizacao />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
