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
        <clipPath id="Georgia_svg_prefix__a">
          <path d="M16 0h5v25h-5zm0 0" />
        </clipPath>
        <clipPath id="Georgia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Georgia_svg_prefix__c">
          <path d="M0 10h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Georgia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#fff"
      />
      <g clipPath="url(#Georgia_svg_prefix__a)">
        <g clipPath="url(#Georgia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M16.383 0h4.226v24.992h-4.226zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Georgia_svg_prefix__c)">
        <g clipPath="url(#Georgia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 10.633h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M7.398 1.594h.528c.586 0 1.058.476 1.058 1.066v4.785a1.06 1.06 0 01-1.058 1.063h-.528A1.06 1.06 0 016.34 7.445V2.66c0-.59.473-1.066 1.058-1.066zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M4.227 5.316v-.53a1.06 1.06 0 011.058-1.063h4.754a1.06 1.06 0 011.059 1.062v.531c0 .59-.473 1.063-1.059 1.063H5.285a1.058 1.058 0 01-1.058-1.063zm0 0M7.398 17.016h.528a1.06 1.06 0 011.058 1.062v4.785c0 .59-.472 1.067-1.058 1.067h-.528a1.061 1.061 0 01-1.058-1.067v-4.785a1.06 1.06 0 011.058-1.062zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M4.227 20.738v-.531c0-.59.472-1.066 1.058-1.066h4.754c.586 0 1.059.476 1.059 1.066v.531a1.06 1.06 0 01-1.059 1.063H5.285a1.06 1.06 0 01-1.058-1.063zm0 0M29.063 17.016h.527a1.06 1.06 0 011.058 1.062v4.785c0 .59-.472 1.067-1.058 1.067h-.527a1.06 1.06 0 01-1.055-1.067v-4.785a1.06 1.06 0 011.055-1.062zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M25.895 20.738v-.531c0-.59.472-1.066 1.054-1.066h4.758a1.06 1.06 0 011.055 1.066v.531a1.06 1.06 0 01-1.055 1.063h-4.758a1.06 1.06 0 01-1.054-1.063zm0 0M29.063 1.063h.527a1.06 1.06 0 011.058 1.062v4.79a1.06 1.06 0 01-1.058 1.062h-.527a1.06 1.06 0 01-1.055-1.063V2.125a1.06 1.06 0 011.055-1.063zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M25.895 4.785v-.531a1.06 1.06 0 011.054-1.063h4.758a1.06 1.06 0 011.055 1.063v.531a1.06 1.06 0 01-1.055 1.063h-4.758a1.06 1.06 0 01-1.054-1.063zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
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
