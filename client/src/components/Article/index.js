import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Article = props => {
  let isPurple = true;
  let i = parseInt(props.index);
  if (i % 2 == 0) {
    isPurple = false;
  }

  let optionalId = "";
  if (!isPurple) {
    optionalId = "background-override";
  }
  return (
    <div className="specific-article" id={optionalId}>
      <h1 id="title">What can I do with a software engineering degree?</h1>
      <h3 id="date">Today</h3>
      <img alt="" src={props.imgSrc}></img>
      <p id="content-article">
        THIS IS THE ARTICLE TEXT, IMAGINE THAT IT IS VERY, EXTREODRINARILY
        INSPIRING
      </p>
      <br />
    </div>
  );
};

export default Article;

Article.propTypes = {
  featured: PropTypes.bool,
  title: PropTypes.string,
  date: PropTypes.string,
  imgSrc: PropTypes.string,
  content: PropTypes.string
};
