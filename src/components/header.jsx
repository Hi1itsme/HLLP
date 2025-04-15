import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">

          {/* === Full-width Centered Image === */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "400px"
              
            }}
          >
            <img
              src="/HodLotto_BG.JPEG"
              alt="Header Visual"
              style={{
                border: "4px solid black",
                maxWidth: "1200px",
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
          </div>

          {/* === Paragraph inside container === */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <p style={{ textAlign: "center", fontSize: "18px", color: "#fff" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
