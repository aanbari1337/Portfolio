import React, { Component } from "react";
import Avatar from "../img/avatar.jpg";

class Me extends Component {
  render() {
    return (
      <section className="cv-block block-intro border-bottom" id="me">
        <div className="container">
          <div className="avatar">
            <img src={Avatar} className="img-fluid rounded" alt="avatar"></img>
          </div>
          <p>
            Je suis <strong>Amine Anbari</strong>. Élève ingénieur en génie
            informatique, développeur junior ,motivé, dynamique , avec un grand esprit d’équipe et
            curieux de mieux découvrir le monde professionnel et d'approfondir
            mes connaissances.
          </p>
        </div>
      </section>
    );
  }
}

export default Me;
