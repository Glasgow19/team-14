import React from "react";
import { display } from "@material-ui/system";

const backbutton = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "left",
        float: "left"
      }}
    >
      <a href="javascript:history.back()"> Back </a>
    </div>
  );
};

export default backbutton;
