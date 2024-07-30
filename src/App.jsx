import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./Pages/Aboutme";
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Error from "./Pages/Error";
import Aos from "aos";
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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
