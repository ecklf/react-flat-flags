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
        <clipPath id="Moldova_svg_prefix__a">
          <path d="M24 0h13v25H24zm0 0" />
        </clipPath>
        <clipPath id="Moldova_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Moldova_svg_prefix__c">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="Moldova_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
      />
      <g clipPath="url(#Moldova_svg_prefix__a)">
        <g clipPath="url(#Moldova_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M24.836 0H37.52v24.992H24.836zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Moldova_svg_prefix__c)">
        <g clipPath="url(#Moldova_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-.527 0h12.68v24.992H-.528zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <path
        d="M14.785 11.387l1.54-2.34c.195-.293.613-.531.933-.531h3.695l1.23 7.425h-5.687l.75-4.554zm0 0"
        fill="#434953"
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
