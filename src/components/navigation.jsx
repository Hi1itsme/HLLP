import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#home">
            HODLOTTO
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#what-is-it" className="page-scroll">
                What is it
              </a>
            </li>
            <li>
              <a href="#lore" className="page-scroll">
                Lore
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="page-scroll">
                How it works
              </a>
            </li>
            <li>
              <a href="#stats" className="page-scroll">
                Stats
              </a>
            </li>
            <li>
              <a href="#roadmap" className="page-scroll">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="page-scroll">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#socials" className="page-scroll">
                Socials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
