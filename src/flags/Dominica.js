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
          fill="#51c161"
        />
        <path d="M20.078 0h2.645v24.992h-2.645zm0 0" fill="#fff" />
        <path d="M17.438 0h2.64v24.992h-2.64zm0 0" fill="#434953" />
        <path d="M14.797 0h2.64v24.992h-2.64zm0 0" fill="#f5bb41" />
        <path d="M0 13.824h36.988v2.66H0zm0 0" fill="#fff" />
        <path d="M0 11.168h36.988v2.656H0zm0 0" fill="#434953" />
        <path d="M0 8.508h36.988v2.66H0zm0 0" fill="#f5bb41" />
        <path
          d="M18.758 4.254c4.523 0 8.191 3.691 8.191 8.242 0 4.55-3.668 8.242-8.191 8.242-4.524 0-8.188-3.691-8.188-8.242 0-4.55 3.664-8.242 8.188-8.242zm0 0"
          fill="#ed5565"
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
