import React, { Component } from "react";
import Education from "./education";

class educationSection extends Component {
  render() {
    return (
      <section className="work-experience">
        <div className="container">
          <h2 className="workExperience border-bottom" id="formation">
            Formation
          </h2>
          <Education school={"ENSA de Khouribga"} description={"troisième année cycle d’ingénieur en génie informatique | Septembre 2016 - présent"}/>
          <Education school={"Ecole 1337 Khouribga (Réseau 42)"} description={"Développeur junior | Octobre 2019 - présent"}/>
          <Education school={"Lycée al kindi"} description={"Science mathématique A| Septembre 2015 - Juillet 2016"}/>
        </div>
      </section>
    );
  }
}

export default educationSection;
