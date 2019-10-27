import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import PaperComponent from '../Shared/PaperComponent';

const Fact = (props) => {
	let isPurple = true;
	let i = parseInt(props.index);
	if (i % 2 == 0) {
		isPurple = false;
	}

	let optionalId = '';
	if (!isPurple) {
		optionalId = 'fact-override';
	}

	return (
		// <div className="fact-component" id={optionalId}>
		//   <img alt="" src={props.img} />
		//   <div className="content">
		//     <h2 className="title">{props.title}</h2>
		//     <h3><a href={props.url} className="URL" id='url'>{props.url}</a></h3>
		//   </div>
		<div className="fact-component" id={optionalId}>

			<PaperComponent text={props.title} title="Title" img={"https://i1.wp.com/geoawesomeness.com/wp-content/uploads/2017/09/Coding-Geospatial.jpg"} />
		</div>
	);
};

export default Fact;

Fact.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	url: PropTypes.string
};
