import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const AlternatingComponent = props => {
  const isLeft = props.imgPosition === "left";

  let imgFloat;
  let componentColour = "";
  if (isLeft) {
    imgFloat = "imgLeft";
  } else {
    componentColour = "background-override";
    imgFloat = "imgRight";
  }

  return (
    <div className="alternating-component" id={componentColour}>
      <div>
        <img id={imgFloat} alt="" src={props.imgSrc} />
      </div>
      <div>
        <h2 className="title">{props.title}</h2>
        <p className="truncate">{props.text}</p>
      </div>
    </div>
  );
};

export default AlternatingComponent;

AlternatingComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  imgPosition: PropTypes.oneOf(["left", "right"])
};
