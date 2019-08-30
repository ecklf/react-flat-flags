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
        <clipPath id="Haiti_svg_prefix__a">
          <path d="M0 12h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Haiti_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Haiti_svg_prefix__a)">
        <g clipPath="url(#Haiti_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v12.23H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M10.57 7.977h15.852v10.632H10.57zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M19.55 11.168h4.759v1.594H19.55zm0 0M13.21 11.168h4.755v1.594H13.21zm0 0M15.324 9.04h2.64v1.593h-2.64zm0 0M19.55 9.04h2.645v1.593h-2.644zm0 0M15.324 13.293h2.64v1.594h-2.64zm0 0M19.55 13.293h2.645v1.594h-2.644zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <path
        d="M18.496 18.078l6.867-3.723v4.254h-6.867zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <path
        d="M19.023 18.078l-6.87-3.723v4.254h6.87zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <path
        d="M17.965 9.04h1.586v9.57h-1.586zm0 0"
        fillRule="evenodd"
        fill="#57a763"
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
