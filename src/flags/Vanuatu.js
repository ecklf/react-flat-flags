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
        <clipPath id="Vanuatu_svg_prefix__a">
          <path d="M0 0h37v11H0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__c">
          <path d="M0 0h22v25H0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__e">
          <path d="M14 10h23v5H14zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__g">
          <path d="M0 0h19v25H0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__i">
          <path d="M14 11h23v3H14zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__k">
          <path d="M0 4h15v17H0zm0 0" />
        </clipPath>
        <clipPath id="Vanuatu_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#Vanuatu_svg_prefix__a)">
        <g clipPath="url(#Vanuatu_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v10.633H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Vanuatu_svg_prefix__c)">
        <g clipPath="url(#Vanuatu_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-8.46 12.496l.12-16.758 29.633 16.758L-8.34 29.254zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Vanuatu_svg_prefix__e)">
        <g clipPath="url(#Vanuatu_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M14.8 10.11h25.36v4.773H14.8zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Vanuatu_svg_prefix__g)">
        <g clipPath="url(#Vanuatu_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M-7.406 12.496l.105-14.629L18.5 12.497-7.3 27.124zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Vanuatu_svg_prefix__i)">
        <g clipPath="url(#Vanuatu_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M14.797 11.168h22.191v2.656H14.797zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Vanuatu_svg_prefix__k)">
        <g clipPath="url(#Vanuatu_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M-.004 12.496L.055 4.25l14.215 8.246L.055 20.742zm0 0"
            fillRule="evenodd"
            fill="#434953"
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
