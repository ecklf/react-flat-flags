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
        <clipPath id="SaintLucia_svg_prefix__a">
          <path d="M7 3h22v20H7zm0 0" />
        </clipPath>
        <clipPath id="SaintLucia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintLucia_svg_prefix__c">
          <path d="M9 6h18v17H9zm0 0" />
        </clipPath>
        <clipPath id="SaintLucia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintLucia_svg_prefix__e">
          <path d="M7 14h22v9H7zm0 0" />
        </clipPath>
        <clipPath id="SaintLucia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#3bafd9"
      />
      <g clipPath="url(#SaintLucia_svg_prefix__a)">
        <g clipPath="url(#SaintLucia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M7.926 22.863L18.18 3.723l9.828 19.14zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#SaintLucia_svg_prefix__c)">
        <g clipPath="url(#SaintLucia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M9.512 22.863l8.633-16.48 8.277 16.48zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#SaintLucia_svg_prefix__e)">
        <g clipPath="url(#SaintLucia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M7.926 22.863l10.219-7.976 9.863 7.976zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
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
