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
      <g fillRule="evenodd">
        <path
          d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
          fill="#ed5565"
        />
        <path
          d="M21.766 17.906a5.998 5.998 0 01-.953.375c-3.094.922-6.313-.875-7.192-4.008a6.032 6.032 0 01-.219-1.812 6.092 6.092 0 01.301-1.809c1.02-3.109 4.317-4.816 7.367-3.812.32.105.621.234.907.39l.003-.003.024.011a.196.196 0 00.25-.129.193.193 0 00-.07-.226 7.158 7.158 0 00-2.508-1.442c-3.828-1.257-7.973.887-9.25 4.79a7.652 7.652 0 00-.375 2.183c-.016.723.074 1.461.277 2.191 1.102 3.938 5.145 6.192 9.027 5.036a7.305 7.305 0 002.57-1.371.21.21 0 00.083-.227.195.195 0 00-.242-.137zm-.532-2.437c-.304.199-.472.074-.37-.281l.366-1.32c.098-.356-.039-.852-.304-1.102l-.93-.88c-.266-.25-.187-.452.172-.448l1.352.007c.363.004.753-.28.87-.629l.477-1.445c.117-.348.301-.348.41.004l.457 1.457c.11.352.493.652.856.668l1.375.063c.363.015.43.222.144.453l-1.082.89c-.28.235-.441.715-.351 1.074l.289 1.184c.09.36-.086.484-.387.281l-1.094-.738c-.3-.203-.797-.207-1.097-.004zm0 0"
          fill="#fff"
        />
      </g>
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
