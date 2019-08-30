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
        <clipPath id="Oman_svg_prefix__a">
          <path d="M0 0h10v25H0zm0 0" />
        </clipPath>
        <clipPath id="Oman_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Oman_svg_prefix__c">
          <path d="M9 8h28v10H9zm0 0" />
        </clipPath>
        <clipPath id="Oman_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Oman_svg_prefix__e">
          <path d="M9 17h28v8H9zm0 0" />
        </clipPath>
        <clipPath id="Oman_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Oman_svg_prefix__a)">
        <g clipPath="url(#Oman_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h9.512v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Oman_svg_prefix__c)">
        <g clipPath="url(#Oman_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M9.512 8.508h27.476v8.508H9.512zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Oman_svg_prefix__e)">
        <g clipPath="url(#Oman_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M9.512 17.016h27.476v7.976H9.512zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <path d="M3.7 3.723h2.64v2.656H3.7zm0 0" fillRule="evenodd" fill="#fff" />
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
