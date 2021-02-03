import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <HeroCarousel />
      <PortfolioSection />
      <AboutMeSection />
      <Footer />
    </>
  );
}

export default Home;
