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
        <clipPath id="Slovenia_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__e">
          <path d="M4 5h7v8H4zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__g">
          <path d="M4 5h6v8H4zm0 0" />
        </clipPath>
        <clipPath id="Slovenia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Slovenia_svg_prefix__a)">
        <g clipPath="url(#Slovenia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Slovenia_svg_prefix__c)">
        <g clipPath="url(#Slovenia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Slovenia_svg_prefix__e)">
        <g clipPath="url(#Slovenia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M8.988 6.016c-1.031 0-1.586-.7-1.586-.7s-.558.7-1.586.7c-.949 0-1.59-.579-1.59-.579V9.23c.032 2.5 3.172 3.532 3.172 3.532S10.57 11.73 10.57 9.23V5.437s-.636.579-1.582.579zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Slovenia_svg_prefix__g)">
        <g clipPath="url(#Slovenia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M8.668 6.52c-.82 0-1.266-.582-1.266-.582s-.449.582-1.27.582c-.757 0-1.269-.485-1.269-.485V9.2c.02 2.082 2.535 2.942 2.535 2.942s2.536-.86 2.536-2.942V6.035s-.508.485-1.266.485zm0 0"
            fill="#4757a9"
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
