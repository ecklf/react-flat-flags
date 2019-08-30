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
        <clipPath id="Jamaica_svg_prefix__a">
          <path d="M0 0h17v25H0zm0 0" />
        </clipPath>
        <clipPath id="Jamaica_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Jamaica_svg_prefix__c">
          <path d="M20 0h17v25H20zm0 0" />
        </clipPath>
        <clipPath id="Jamaica_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Jamaica_svg_prefix__e">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <g clipPath="url(#Jamaica_svg_prefix__a)">
        <g clipPath="url(#Jamaica_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0l16.91 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Jamaica_svg_prefix__c)">
        <g clipPath="url(#Jamaica_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M37.52 0L20.61 12.762l16.91 12.23zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g
        clipPath="url(#Jamaica_svg_prefix__e)"
        clipRule="evenodd"
        fillRule="evenodd"
        fill="#ffcd53"
      >
        <path d="M-.29 26.434l-1.429-2.235L37.805-1.445 39.238.789zm0 0" />
        <path d="M37.684 26.586l1.421-2.219-39.27-25.43-1.42 2.215zm0 0" />
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
