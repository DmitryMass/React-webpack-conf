import React from "react";
import image from "../assets/img/searchimg.png";
import propTypes from "prop-types";

const Button = ({ children, colorType, myIcon }) => {
  let className = "button";

  if (colorType === "second") {
    className = `${className} button__second`;
  } else if (colorType === "third") {
    className = `${className} button__third`;
  }

  return (
    <button className={className}>
      {myIcon && <img src={image} alt="" />}
      {children}
    </button>
  );
};

// PROPTYPES типизация
Button.propTypes = {
  colorType: propTypes.oneOf(["second", "third"]),
  myIcon: propTypes.bool,
  //   children: propTypes.string
};

Button.defaultProps = {
  colorType: null,
  myIcon: false,
};

// is Required --- пропс Обязательно должен передасться
//  после proptypes.bool.isRequired
export default Button;
