import React from "react";
import Navbar from "./components/Navbar";
import Me from "./components/me";
import ProjectSection from "./components/projectSection";
import EducationSection from "./components/educationSection";
import Skills from "./components/skills";
import ContactInfo from "./components/contactInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Me />
      <ProjectSection />
      <EducationSection />
      <div className="container group" id="competence">
        <div className="row">
          <Skills />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
