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
        <clipPath id="Malta_svg_prefix__a">
          <path d="M17 0h20v25H17zm0 0" />
        </clipPath>
        <clipPath id="Malta_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Malta_svg_prefix__a)">
        <g clipPath="url(#Malta_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M17.965 0h19.023v24.992H17.965zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M7.398 3.723h1.586a1.06 1.06 0 011.055 1.062v7.977a1.06 1.06 0 01-1.055 1.062H7.398a1.06 1.06 0 01-1.058-1.062V4.785a1.06 1.06 0 011.058-1.062zm0 0"
        fillRule="evenodd"
        fill="#cbd1d9"
      />
      <path
        d="M3.172 9.57V7.977c0-.59.473-1.063 1.055-1.063h7.925c.586 0 1.059.473 1.059 1.063V9.57c0 .59-.473 1.063-1.059 1.063H4.227A1.057 1.057 0 013.172 9.57zm0 0"
        fillRule="evenodd"
        fill="#cbd1d9"
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
