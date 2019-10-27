import styled from "styled-components";
import React from "react";
import { slide as Menu } from "react-burger-menu";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "18px",
    height: "18px",
    right: "18px",
    top: "18px"
  },
  bmBurgerBars: {
    background: "#fff"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#FFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },

  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const NavBar = props => {
  return (
    <div>
      <Menu right styles={styles}>
        <div id="home" className="menu-item">
          <a href="/">
            <h3>Home</h3>
          </a>
        </div>
        <div id="info" className="menu-item">
          <a href="/info">
            <h3>Facts</h3>
          </a>
        </div>
        <div id="story" className="menu-item">
          <a href="/story">
            <h3>Success Stories</h3>
          </a>
        </div>
        <div id="articles" className="menu-item">
          <a href="/articles">
            <h3>Articles</h3>
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
