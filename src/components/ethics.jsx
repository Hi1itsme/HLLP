import React from "react";

export const Ethics = (props) => {
  return (
    // Using id="about"
    <div id="ethics">
      {/* Using standard container */}
      <div className="container">
        <div className="row">
          {/* Image Column - Changed to col-md-6 */}
          <div className="col-xs-20 col-md-6"> {/* CHANGED from 7 */}
            {" "}
            <img
              src="/spaceman_judge.png" // Root-relative path
              className="img-responsive" // Allows image to scale
              alt="Spaceman Judge for Ethics Section"
             />{" "}
          </div>
          {/* Text Column - Changed width to 4 and offset to 2 */}
          <div className="col-xs-12 col-md-4 col-md-offset-10"> {/* CHANGED from 4 offset 1 */}
            <div className="about-text">
              <h2>Ethics</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};