import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Resource = props => {
  let isPurple = true;
  let i = parseInt(props.index);
  if (i % 2 == 0) {
    isPurple = false;
  }

  let optionalId = "";
  if (!isPurple) {
    optionalId = "resource-override";
  }

  return (
    <div className="resource-component" id={optionalId}>
      <img alt="" src={props.img} />
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <h3>
          <a href={props.url} className="URL" id="url">
            {props.url}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Resource;

Resource.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string
};
