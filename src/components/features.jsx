import React from "react";

export const Features = (props) => {
  return (
    // Keep the main container div with the id="features"
   <div id="features" className="text-center">
      <div className="container">
        {/* This div below is the one positioning the title */}
        <div className="col-md-12 col-md-offset-1 section-title">
          <h2>Logistics</h2>
        </div>
        {/* ... (rest of the component) ... */}
      </div>
    </div>
    );
};