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
        <clipPath id="Qatar_svg_prefix__a">
          <path d="M0 0h10v25H0zm0 0" />
        </clipPath>
        <clipPath id="Qatar_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#a54576"
      />
      <g clipPath="url(#Qatar_svg_prefix__a)">
        <g clipPath="url(#Qatar_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h9.512v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <path
        d="M6.34 2.754L9.246 0l2.906 2.754-2.906 2.758zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M6.34 7.625l2.906-2.754 2.906 2.754-2.906 2.754zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M6.34 12.496l2.906-2.754 2.906 2.754-2.906 2.754zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M6.34 17.367l2.906-2.758 2.906 2.758-2.906 2.754zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M6.34 22.238l2.906-2.758 2.906 2.758-2.906 2.754zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
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
