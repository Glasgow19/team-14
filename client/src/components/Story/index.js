import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Story = props => {
  let isPurple = true;
  let i = parseInt(props.index);
  if (i % 2 === 0) {
    isPurple = false;
  }

  let optionalId = "";
  if (!isPurple) {
    optionalId = "story-override";
  }

  return (
    <div className="story-component" id={optionalId}>
      <img alt="" src={props.image} />
      <div className="content">
        <h2 className="title">{props.name}</h2>
        <h2 className="age">{props.age}</h2>
        <h2 className="text">{props.story}</h2>
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
