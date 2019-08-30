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
        <clipPath id="Liberia_svg_prefix__a">
          <path d="M0 0h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__c">
          <path d="M0 6h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__e">
          <path d="M0 12h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__g">
          <path d="M0 18h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__i">
          <path d="M0 0h16v16H0zm0 0" />
        </clipPath>
        <clipPath id="Liberia_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Liberia_svg_prefix__a)">
        <g clipPath="url(#Liberia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0-.004h36.988v3.195H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Liberia_svg_prefix__c)">
        <g clipPath="url(#Liberia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 6.379h36.988V9.57H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Liberia_svg_prefix__e)">
        <g clipPath="url(#Liberia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 12.227h36.988v3.195H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Liberia_svg_prefix__g)">
        <g clipPath="url(#Liberia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 18.078h36.988v3.192H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Liberia_svg_prefix__i)">
        <g clipPath="url(#Liberia_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 0h15.852v15.422H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M5.844 12.082c-.414.297-.653.129-.532-.367l.442-1.848c.121-.5-.094-1.176-.477-1.512L3.934 7.187c-.383-.332-.286-.617.218-.632L6.035 6.5c.504-.012 1.031-.426 1.176-.914l.59-2.024c.14-.488.398-.496.57-.015l.711 1.992c.168.48.723.879 1.227.883l1.918.02c.503.007.605.285.222.62l-1.457 1.29c-.383.332-.578 1.007-.437 1.5l.465 1.628c.14.489-.094.672-.524.407l-1.559-.969c-.43-.27-1.12-.246-1.53.047zm0 0"
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
