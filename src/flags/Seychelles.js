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
        <clipPath id="Seychelles_svg_prefix__a">
          <path d="M0 0h14v25H0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__c">
          <path d="M0 0h25v25H0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__e">
          <path d="M0 6h37v19H0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__g">
          <path d="M0 14h37v11H0zm0 0" />
        </clipPath>
        <clipPath id="Seychelles_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Seychelles_svg_prefix__a)">
        <g clipPath="url(#Seychelles_svg_prefix__b)" clipRule="evenodd">
          <path d="M-.469 25.46L13.082-.53H-.468zm0 0" fill="#4757a9" />
        </g>
      </g>
      <g clipPath="url(#Seychelles_svg_prefix__c)">
        <g clipPath="url(#Seychelles_svg_prefix__d)" clipRule="evenodd">
          <path d="M-.969 25.46L12.582-.53h12.102zm0 0" fill="#ffcd53" />
        </g>
      </g>
      <g clipPath="url(#Seychelles_svg_prefix__e)">
        <g clipPath="url(#Seychelles_svg_prefix__f)" clipRule="evenodd">
          <path d="M-.527 25.523l41.609-19.28v9.73zm0 0" fill="#fff" />
        </g>
      </g>
      <g clipPath="url(#Seychelles_svg_prefix__g)">
        <g clipPath="url(#Seychelles_svg_prefix__h)" clipRule="evenodd">
          <path d="M-.52 24.992H41.22V14.895zm0 0" fill="#57a763" />
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
