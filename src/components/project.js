import React from "react";

function project(props) {
  const { title, description, link, tech } = props;
  return (
    <div className="item border-bottom">
      <div className="row">
        <div className="col-md-12">
          <h3>{title}</h3>
          {tech.map((item) => (
            <h4 className="technologie">{item}</h4>
          ))}
          <p className="text-muted">{description}</p>
          <a href={link} target="_blank" className="btn btn-link git">See on Git</a>
        </div>
      </div>
    </div>
  );
}

export default project;
