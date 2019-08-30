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
        <clipPath id="Montenegro_svg_prefix__a">
          <path d="M2 2h33v21H2zm0 0" />
        </clipPath>
        <clipPath id="Montenegro_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#Montenegro_svg_prefix__a)">
        <g clipPath="url(#Montenegro_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M2.113 2.125h32.762v20.738H2.113zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M21.887 6.14l.925 1.274h-1.476l.45 2.48h2.523l-3.403 8.711H16.07l-3.39-8.71h2.078l.39-2.395h-1.402l.879-1.344.531-.3h2.106l.664 4.039h.445l.738-4.04h2.22zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
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
