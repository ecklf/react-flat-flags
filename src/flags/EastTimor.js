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
        <clipPath id="EastTimor_svg_prefix__a">
          <path d="M0 0h22v25H0zm0 0" />
        </clipPath>
        <clipPath id="EastTimor_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="EastTimor_svg_prefix__c">
          <path d="M0 0h16v25H0zm0 0" />
        </clipPath>
        <clipPath id="EastTimor_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="EastTimor_svg_prefix__e">
          <path d="M2 10h5v5H2zm0 0" />
        </clipPath>
        <clipPath id="EastTimor_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#EastTimor_svg_prefix__a)">
        <g clipPath="url(#EastTimor_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0l21.137 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#EastTimor_svg_prefix__c)">
        <g clipPath="url(#EastTimor_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0l15.324 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#EastTimor_svg_prefix__e)">
        <g clipPath="url(#EastTimor_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M5.164 14.695c-.043.235-.18.258-.305.059L4.391 14a.798.798 0 00-.668-.336l-.852.063c-.242.02-.3-.106-.137-.278l.621-.644a.619.619 0 00.094-.692l-.476-.855c-.114-.207-.032-.297.187-.195l.91.417c.22.098.54.047.715-.12l.66-.63c.172-.168.301-.109.282.125l-.067.91a.732.732 0 00.356.633l.707.38c.21.113.191.253-.043.308l-.856.2a.731.731 0 00-.504.527zm0 0"
            fill="#f5f7f9"
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
