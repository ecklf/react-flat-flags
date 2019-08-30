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
        <clipPath id="Mongolia_svg_prefix__a">
          <path d="M24 0h13v25H24zm0 0" />
        </clipPath>
        <clipPath id="Mongolia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Mongolia_svg_prefix__c">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="Mongolia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4989db"
      />
      <g clipPath="url(#Mongolia_svg_prefix__a)">
        <g clipPath="url(#Mongolia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M24.836 0H37.52v24.992H24.836zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Mongolia_svg_prefix__c)">
        <g clipPath="url(#Mongolia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-.527 0h12.68v24.992H-.528zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M2.113 10.633H3.7v6.914H2.113zm0 0M7.926 10.633h1.586v6.914H7.926zm0 0M5.813 12.23c.875 0 1.585.715 1.585 1.594 0 .883-.71 1.598-1.585 1.598a1.592 1.592 0 01-1.586-1.598c0-.879.71-1.594 1.585-1.594zm0 0M5.813 6.914c.875 0 1.585.711 1.585 1.594 0 .883-.71 1.594-1.585 1.594S4.226 9.39 4.226 8.508c0-.883.71-1.594 1.585-1.594zm0 0M5.813 15.953h1.582l-1.582 1.59-1.583-1.59zm0 0"
        fillRule="evenodd"
        fill="#f5bb41"
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
