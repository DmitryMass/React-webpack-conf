import React from "react";
import propTypes from "prop-types";
import Button from "./Btn";

const Header = ({ navigationList }) => {
  return (
    <header>
      <h1 className="h1">Hello world</h1>
      <a href="">Logo</a>
      <Button myIcon colorType="second">
        First TXT
      </Button>
      <ul>
        {navigationList.map((text) => {
          return (
            <li key={text}>
              <a href="">{text}</a>
            </li>
          );
        })}
      </ul>
      <Button myIcon colorType="third">
        Third btn
      </Button>
    </header>
  );
};

Header.propTypes = {
  navigationList: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Header;
