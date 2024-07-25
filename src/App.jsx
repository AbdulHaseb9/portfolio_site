import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aos from "aos";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Hero />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="contactme" element={<Contact />} />
          <Route path="myskills" element={<Skills />} />
          <Route path="myprojects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
