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
        <clipPath id="Rwanda_svg_prefix__a">
          <path d="M0 20h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Rwanda_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Rwanda_svg_prefix__c">
          <path d="M29 4h5v5h-5zm0 0" />
        </clipPath>
        <clipPath id="Rwanda_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Rwanda_svg_prefix__e">
          <path d="M0 11h37v10H0zm0 0" />
        </clipPath>
        <clipPath id="Rwanda_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#3bafd9"
      />
      <g clipPath="url(#Rwanda_svg_prefix__a)">
        <g clipPath="url(#Rwanda_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 20.207h36.988v4.785H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#Rwanda_svg_prefix__c)">
        <g clipPath="url(#Rwanda_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M31.176 4.254a2.12 2.12 0 012.113 2.125 2.12 2.12 0 01-2.113 2.129 2.12 2.12 0 01-2.113-2.13 2.12 2.12 0 012.113-2.124zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Rwanda_svg_prefix__e)">
        <g clipPath="url(#Rwanda_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 11.7h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
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
