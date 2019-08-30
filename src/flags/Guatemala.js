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
        <clipPath id="Guatemala_svg_prefix__a">
          <path d="M12 0h13v25H12zm0 0" />
        </clipPath>
        <clipPath id="Guatemala_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#8bb9e1"
      />
      <g clipPath="url(#Guatemala_svg_prefix__a)">
        <g clipPath="url(#Guatemala_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M12.152 0h12.684v24.992H12.152zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <path
        d="M18.496 10.102a2.652 2.652 0 012.64 2.66 2.652 2.652 0 01-2.64 2.66 2.652 2.652 0 01-2.644-2.66 2.652 2.652 0 012.644-2.66zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <path
        d="M18.496 10.633c1.164 0 2.113.953 2.113 2.129a2.12 2.12 0 01-2.113 2.125 2.117 2.117 0 01-2.113-2.125 2.12 2.12 0 012.113-2.13zm0 0"
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
