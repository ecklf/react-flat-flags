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
          d="M17.438 6.379h2.113c.586 0 1.058.476 1.058 1.066v10.633c0 .59-.472 1.063-1.058 1.063h-2.113a1.057 1.057 0 01-1.055-1.063V7.445c0-.59.472-1.066 1.055-1.066zm0 0"
          fill="#fff"
        />
        <path
          d="M12.152 13.824V11.7c0-.59.473-1.066 1.059-1.066h10.566c.586 0 1.059.476 1.059 1.066v2.125c0 .59-.473 1.063-1.059 1.063H13.211a1.058 1.058 0 01-1.059-1.063zm0 0"
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
