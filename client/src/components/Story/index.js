import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Story = props => {
    const isLeft = props.index % 2 === 1;

    let imgFloat;
    let componentColour = "";
    if (isLeft) {
      imgFloat = "imgLeft";
    } else {
      componentColour = "story-override";
      imgFloat = "imgRight";
    }

  return (
    <div className="story-component" id={componentColour}>
      <div className="content">
        <h2 className="title">{props.name}</h2>
        <h2 className="age">{props.age}</h2>
        <h2 className="text">{props.story}</h2>
      </div>
      <div>
      <img alt="" src={props.image} />
      </div>
    </div>
  );
};

export default Story;

Story.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  story: PropTypes.string,
};
