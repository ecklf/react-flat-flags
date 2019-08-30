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
        <clipPath id="Guyana_svg_prefix__a">
          <path d="M0 0h32v25H0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__c">
          <path d="M0 1h29v23H0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__e">
          <path d="M0 0h21v25H0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__g">
          <path d="M0 1h18v22H0zm0 0" />
        </clipPath>
        <clipPath id="Guyana_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <g clipPath="url(#Guyana_svg_prefix__a)">
        <g clipPath="url(#Guyana_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0l31.707 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Guyana_svg_prefix__c)">
        <g clipPath="url(#Guyana_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 1.594l28.008 11.133L0 23.395zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Guyana_svg_prefix__e)">
        <g clipPath="url(#Guyana_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 0l20.61 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Guyana_svg_prefix__g)">
        <g clipPath="url(#Guyana_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 1.594l17.438 10.863L0 22.863zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
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
