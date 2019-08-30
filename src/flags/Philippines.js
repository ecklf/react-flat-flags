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
        <clipPath id="Philippines_svg_prefix__a">
          <path d="M0 0h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Philippines_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Philippines_svg_prefix__c">
          <path d="M0 0h16v25H0zm0 0" />
        </clipPath>
        <clipPath id="Philippines_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Philippines_svg_prefix__a)">
        <g clipPath="url(#Philippines_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v12.762H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Philippines_svg_prefix__c)">
        <g clipPath="url(#Philippines_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0l15.324 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <path
        d="M4.754 10.633c1.168 0 2.117.953 2.117 2.129a2.12 2.12 0 01-2.117 2.125 2.12 2.12 0 01-2.113-2.125c0-1.176.949-2.13 2.113-2.13zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
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
