import React from "react";

function skills() {
  return (
    <div class="col-sm-6">
      <div class="card  info-card">
        <div class="card-body">
          <h4 class="card-title">Competence</h4>
          <h6>C / C++ / Java (Swing)</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{width:"60%"}}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6>HTML / CSS / Bootstrap / JS / Node.js / React</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{width:"50%"}}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6>JEE / Spring Boot</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{width:"30%"}}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6>MySQL / Oracle / MongoDB / Firebase</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{width:"70%"}}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6>Git / Github / Docker / Linux</h6>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{width:"50%"}}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
