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
        <clipPath id="Ecuador_svg_prefix__a">
          <path d="M0 14h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__c">
          <path d="M0 19h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__e">
          <path d="M13 4h12v17H13zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__g">
          <path d="M14 6h10v14H14zm0 0" />
        </clipPath>
        <clipPath id="Ecuador_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f1d55f"
      />
      <g clipPath="url(#Ecuador_svg_prefix__a)">
        <g clipPath="url(#Ecuador_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 14.355h36.988v5.32H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Ecuador_svg_prefix__c)">
        <g clipPath="url(#Ecuador_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 19.676h36.988v5.316H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Ecuador_svg_prefix__e)">
        <g clipPath="url(#Ecuador_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.54 6.234c-1.802 0-2.774-1.449-2.774-1.449s-.977 1.45-2.778 1.45c-1.66 0-2.777-1.204-2.777-1.204v7.86c.05 5.175 5.547 7.316 5.547 7.316s5.55-2.14 5.55-7.316V5.03S23.2 6.234 21.54 6.234zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Ecuador_svg_prefix__g)">
        <g clipPath="url(#Ecuador_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M21.012 7.578c-1.461 0-2.246-1.2-2.246-1.2s-.793 1.2-2.25 1.2c-1.344 0-2.25-.996-2.25-.996v6.508c.043 4.281 4.492 6.05 4.492 6.05s4.492-1.769 4.492-6.05V6.582s-.898.996-2.238.996zm0 0"
            fill="#f1d55f"
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
