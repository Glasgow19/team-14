import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./event.css";
import ProTypes from "prop-types";
import styled from 'styled-components'

const styledDiv = styled.div`
    
    

`

const image = styled.img`


`



const Event = props => {
    return(
        <styledDiv >
                <img alt= "" src = "http://via.placeholder.com/300"></img>
            <styledDetails>
                <h2 id="date">{props.date}</h2>
                <h3 id= "title">{props.title}</h3>
                <h3 id ="location">{props.location}</h3>
            </styledDetails>
        </styledDiv>
    )
}

export default Event
