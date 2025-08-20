import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from './components/ThemeToggle'


export default function App() {
  return (
    <>
    
      <Navbar />
      <ThemeToggle />
      <Home />
      
      <About />
      <Skills />
      <Projects />
      <Resume/>
      <Contact/>
    
    </>
  );
}
