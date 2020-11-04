import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Name:</strong> Bùi Anh Duy
              </p>
              <p>
                <strong>Date of birth:</strong> Aug 28, 1995
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Binh Thanh District
              </p>
              <p>
                <strong>Email:</strong> buianhduy76@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0909026800
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
