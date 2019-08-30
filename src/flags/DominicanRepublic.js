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
        <clipPath id="DominicanRepublic_svg_prefix__a">
          <path d="M0 0h17v11H0zm0 0" />
        </clipPath>
        <clipPath id="DominicanRepublic_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="DominicanRepublic_svg_prefix__c">
          <path d="M20 14h17v11H20zm0 0" />
        </clipPath>
        <clipPath id="DominicanRepublic_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#DominicanRepublic_svg_prefix__a)">
        <g clipPath="url(#DominicanRepublic_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h16.383v10.633H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#DominicanRepublic_svg_prefix__c)">
        <g clipPath="url(#DominicanRepublic_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M20.61 14.887h16.378v10.105H20.61zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M16.383 0h4.226v24.992h-4.226zm0 0"
        fillRule="evenodd"
        fill="#fff"
      />
      <path d="M0 10.633h36.988v4.254H0zm0 0" fillRule="evenodd" fill="#fff" />
      <path
        d="M18.496 10.633c1.164 0 2.113.953 2.113 2.129a2.12 2.12 0 01-2.113 2.125 2.117 2.117 0 01-2.113-2.125 2.12 2.12 0 012.113-2.13zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <path
        d="M18.496 11.168c.875 0 1.582.71 1.582 1.594 0 .883-.707 1.593-1.582 1.593-.875 0-1.586-.71-1.586-1.593s.711-1.594 1.586-1.594zm0 0"
        fillRule="evenodd"
        fill="#fff"
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
