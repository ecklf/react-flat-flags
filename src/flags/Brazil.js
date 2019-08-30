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
        fill="#51c161"
      />
      <path
        d="M3.066 12.512L18.496.532l15.426 11.98-15.426 11.976zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
      />
      <path
        d="M18.496 4.254c4.375 0 7.926 3.57 7.926 7.976 0 4.407-3.55 7.977-7.926 7.977-4.379 0-7.926-3.57-7.926-7.977 0-4.406 3.547-7.976 7.926-7.976zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <path
        d="M25.363 15.953c.223-.473.403-.973.532-1.492a10.697 10.697 0 00-9.844-6.484c-1.82 0-3.531.453-5.031 1.25-.184.386-.332.789-.454 1.207a10.682 10.682 0 014.871-1.168c4.5 0 8.348 2.77 9.926 6.687zm0 0"
        fill="#f5f7f9"
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
