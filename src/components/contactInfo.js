import React from "react";

function contactInfo() {
  return (
    <div className="col-sm-6">
      <div className="card info-card">
        <div className="card-body">
          <h4 className="card-title">Contact Info</h4>
          <div class="row">
            <div class="col-1">
              <i class="far fa-calendar"></i>
            </div>
            <div class="col-9">
              <span>11/11/1998</span>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
              <i class="fas fa-user"></i>
            </div>
            <div class="col-9">
              <span>Amine Anbari</span>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
            <i class="fas fa-phone"></i>
            </div>
            <div class="col-9">
              <span>+212 627561491</span>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
            <i class="fas fa-at"></i>
            </div>
            <div class="col-9">
              <span>amineanbari122@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactInfo;
