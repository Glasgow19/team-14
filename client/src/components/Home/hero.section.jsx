import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	top: 0;
    margin: 0;
    width: 100%;
	display: flex;
	position: relative;
	height: 250px;
	justify-content: center;
	align-items: center;

	div {
		position: absolute;
		text-align: center;
		font-family: 'Questrial', sans-serif;
		line-height: 0.8;
		font-size: 40px;
		background-color: rgba(255, 255, 255, 0.6);
		padding: 23px 10px;
        color: #a7358b;
	}
`;

const HeroSection = () => {

    console.log("testting ")
	return (
		<Container>
             
			<img style= {{height: '100%', width: '100%'}}
				src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdisruptionmag.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgirls-who-code-3.jpg&f=1&nofb=1'}
				alt="img"
			/>
			<div>
				Code and<br /> change the world!
			</div>
		</Container>
	);
};

export default HeroSection;
