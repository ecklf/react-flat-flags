import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 25"
      size={size}
      {...otherProps}
    >
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4989db"
      />
      <path
        d="M15.934 16.46c-.391.263-.61.102-.485-.35l.461-1.692c.125-.457-.058-1.086-.406-1.406l-1.215-1.114c-.348-.316-.25-.574.219-.574h1.75c.469 0 .972-.367 1.117-.812l.602-1.848c.144-.45.386-.45.53 0l.606 1.856c.149.449.649.828 1.117.847l1.786.07c.468.02.554.278.191.575l-1.39 1.148c-.364.3-.563.918-.446 1.371l.39 1.516c.118.453-.105.617-.5.36l-1.421-.938c-.395-.254-1.035-.254-1.426.008zm0 0"
        fill="#fff"
      />
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
