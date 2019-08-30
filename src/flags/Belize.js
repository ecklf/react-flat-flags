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
        <clipPath id="Belize_svg_prefix__a">
          <path d="M0 0h37v3H0zm0 0" />
        </clipPath>
        <clipPath id="Belize_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belize_svg_prefix__c">
          <path d="M0 22h37v3H0zm0 0" />
        </clipPath>
        <clipPath id="Belize_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Belize_svg_prefix__a)">
        <g clipPath="url(#Belize_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v2.125H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Belize_svg_prefix__c)">
        <g clipPath="url(#Belize_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 22.863h36.988v2.13H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M18.758 4.254c4.523 0 8.191 3.691 8.191 8.242 0 4.55-3.668 8.242-8.191 8.242-4.524 0-8.188-3.691-8.188-8.242 0-4.55 3.664-8.242 8.188-8.242zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M18.758 5.316c3.941 0 7.137 3.215 7.137 7.18s-3.196 7.18-7.137 7.18c-3.938 0-7.133-3.215-7.133-7.18s3.195-7.18 7.133-7.18zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <path
        d="M18.758 6.379c3.355 0 6.078 2.738 6.078 6.117 0 3.375-2.723 6.113-6.078 6.113-3.356 0-6.074-2.738-6.074-6.113 0-3.379 2.718-6.117 6.074-6.117zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M19.95 10.172c-.77 0-1.188-.602-1.188-.602s-.418.602-1.192.602c-.71 0-1.187-.5-1.187-.5v3.254c.02 2.14 2.375 3.027 2.375 3.027s2.379-.887 2.379-3.027V9.672s-.477.5-1.188.5zm0 0"
        fill="#f5d55f"
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
