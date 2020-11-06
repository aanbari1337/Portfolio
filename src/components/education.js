import React from "react";

function education(props) {
  const { school, description } = props;
  return (
    <div className="item border-bottom">
      <div className="row">
        <div className="col-md-12">
          <h3>{school}</h3>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default education;
