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
      <defs>
        <clipPath id="Tonga_svg_prefix__a">
          <path d="M0 0h17v13H0zm0 0" />
        </clipPath>
        <clipPath id="Tonga_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Tonga_svg_prefix__a)">
        <g clipPath="url(#Tonga_svg_prefix__b)" clipRule="evenodd">
          <path d="M0 0h16.383v12.762H0zm0 0" fillRule="evenodd" fill="#fff" />
        </g>
      </g>
      <path
        d="M7.926 2.66h.527a1.06 1.06 0 011.059 1.063v4.785A1.06 1.06 0 018.453 9.57h-.527A1.06 1.06 0 016.87 8.508V3.723A1.06 1.06 0 017.926 2.66zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M4.754 6.379v-.531c0-.586.476-1.063 1.059-1.063h4.757a1.06 1.06 0 011.055 1.063v.53a1.06 1.06 0 01-1.055 1.067H5.812A1.064 1.064 0 014.755 6.38zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
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
