import React from "react";
import "./index.css";

const PageTitle = props => {
  return (
    <div id="page-title">
      <h2>{props.title}</h2>
    </div>
  );
};

export default PageTitle;
