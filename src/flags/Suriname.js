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
        <clipPath id="Suriname_svg_prefix__a">
          <path d="M0 6h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Suriname_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Suriname_svg_prefix__c">
          <path d="M0 9h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Suriname_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#Suriname_svg_prefix__a)">
        <g clipPath="url(#Suriname_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 6.914h36.988V18.61H0zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Suriname_svg_prefix__c)">
        <g clipPath="url(#Suriname_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 9.04h36.988v7.444H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M16.844 15.852c-.32.214-.5.082-.399-.297l.38-1.418c.1-.38-.048-.907-.333-1.172l-1.004-.934c-.285-.265-.203-.484.184-.484l1.437.004c.387 0 .801-.309.918-.684l.496-1.543c.122-.375.317-.375.438 0l.496 1.551c.121.375.535.695.918.71l1.469.06c.383.015.453.23.156.48l-1.145.96c-.296.25-.46.77-.363 1.15l.32 1.265c.098.383-.085.52-.41.305l-1.172-.785c-.32-.215-.847-.215-1.168.003zm0 0"
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
