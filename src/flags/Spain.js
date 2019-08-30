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
        <clipPath id="Spain_svg_prefix__a">
          <path d="M0 0h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Spain_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Spain_svg_prefix__c">
          <path d="M0 19h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Spain_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Spain_svg_prefix__e">
          <path d="M3 8h8v10H3zm0 0" />
        </clipPath>
        <clipPath id="Spain_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#Spain_svg_prefix__a)">
        <g clipPath="url(#Spain_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v5.316H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Spain_svg_prefix__c)">
        <g clipPath="url(#Spain_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 19.676h36.988v5.316H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Spain_svg_prefix__e)">
        <g clipPath="url(#Spain_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M8.855 9.305c-1.113 0-1.718-.797-1.718-.797s-.606.797-1.719.797c-1.027 0-1.719-.66-1.719-.66v4.335c.031 2.856 3.434 4.036 3.434 4.036s3.437-1.18 3.437-4.036V8.645s-.687.66-1.715.66zm0 0"
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
