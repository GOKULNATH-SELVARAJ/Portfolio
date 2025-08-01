import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/container/Contact/Contact";
import Home from "./components/container/Home/Home";
import Portfolio from "./components/container/Portfolio/Portfolio";
import Skills from "./components/container/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/container/ProjectDetails/ProjectDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <About /> */}
              <Skills />
              <Portfolio />
              <Contact />
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="/project/:name" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
