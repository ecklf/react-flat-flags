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
        <clipPath id="SriLanka_svg_prefix__a">
          <path d="M2 2h6v21H2zm0 0" />
        </clipPath>
        <clipPath id="SriLanka_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SriLanka_svg_prefix__c">
          <path d="M7 2h7v21H7zm0 0" />
        </clipPath>
        <clipPath id="SriLanka_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SriLanka_svg_prefix__e">
          <path d="M15 2h20v21H15zm0 0" />
        </clipPath>
        <clipPath id="SriLanka_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#SriLanka_svg_prefix__a)">
        <g clipPath="url(#SriLanka_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M2.64 2.66h5.286v20.203H2.64zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SriLanka_svg_prefix__c)">
        <g clipPath="url(#SriLanka_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M7.926 2.66h5.285v20.203H7.926zm0 0"
            fillRule="evenodd"
            fill="#ff8316"
          />
        </g>
      </g>
      <g clipPath="url(#SriLanka_svg_prefix__e)">
        <g clipPath="url(#SriLanka_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M15.324 2.66h19.024v20.203H15.324zm0 0"
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
