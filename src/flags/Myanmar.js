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
        <clipPath id="Myanmar_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Myanmar_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Myanmar_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Myanmar_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#Myanmar_svg_prefix__a)">
        <g clipPath="url(#Myanmar_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#Myanmar_svg_prefix__c)">
        <g clipPath="url(#Myanmar_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M14.516 19.965c-.653.484-1.036.21-.844-.606l.703-3.047c.191-.82-.152-1.937-.758-2.484l-2.137-1.93c-.609-.546-.449-1.015.352-1.039l2.988-.09c.801-.023 1.64-.703 1.867-1.507l.938-3.328c.227-.809.637-.82.91-.028l1.125 3.282c.274.792 1.149 1.445 1.95 1.457l3.05.03c.8.009.961.466.356 1.02l-2.32 2.121c-.606.551-.915 1.664-.692 2.473l.742 2.68c.223.808-.152 1.11-.836.672l-2.48-1.598c-.68-.441-1.774-.402-2.43.082zm0 0"
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
