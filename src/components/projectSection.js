import React, { Component } from "react";
import Project from "./project";

class projectSection extends Component {
  render() {
    return (
      <section className="work-experience">
        <div className="container" >
          <h2 className="workExperience border-bottom" id="work-experience">Experience</h2>
            <Project
              title={"ft_server"}
              description={
                'découvrir la technologie "Docker" afin de vous faire installer un server web complet, qui sera capable de faire tourner plusieurs services, tel qu’un Wordpress, PhpMyAdmin, ainsi qu’une base de donnée.'
              }
              link={"https://github.com/aanbari1337/ft_server  "}
              tech={["Docker"]}
            />
            <Project
              title={"ft_printf"}
              description={"recoder la fonction printf de la libc"}
              link={"https://github.com/aanbari1337/ft_printf"}
              tech={["C"]}
            />
            <Project
              title={"Projet-java"}
              description={
                "Ce projet consiste à développer une application de gestion générique des processus administratives"
              }
              link={"https://github.com/aanbari1337/Projet-Java"}
              tech={["Java","Swing","mySQL","MongoDB"]}
            />
          </div>
      </section>
    );
  }
}

export default projectSection;
