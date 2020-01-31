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
        <clipPath id="SouthAfrica_svg_prefix__a">
          <path d="M0 0h37v11H0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__c">
          <path d="M0 0h27v25H0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__e">
          <path d="M14 8h23v9H14zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__g">
          <path d="M0 0h24v25H0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__i">
          <path d="M14 9h23v7H14zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__k">
          <path d="M0 4h16v18H0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__m">
          <path d="M0 5h13v16H0zm0 0" />
        </clipPath>
        <clipPath id="SouthAfrica_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#SouthAfrica_svg_prefix__a)">
        <g clipPath="url(#SouthAfrica_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v10.633H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__c)">
        <g clipPath="url(#SouthAfrica_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-3.18 12.496l.121-16.758 29.637 16.758-29.637 16.758zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__e)">
        <g clipPath="url(#SouthAfrica_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M14.8 8.516h25.36v7.96H14.8zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__g)">
        <g clipPath="url(#SouthAfrica_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M-2.121 12.496l.105-14.629 25.801 14.63-25.8 14.628zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__i)">
        <g clipPath="url(#SouthAfrica_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M14.797 9.57h22.191v5.852H14.797zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__k)">
        <g clipPath="url(#SouthAfrica_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M-.004 13.027L.06 4.25l15.27 8.777-15.27 8.778zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#SouthAfrica_svg_prefix__m)">
        <g clipPath="url(#SouthAfrica_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M-.004 13.027l.05-7.18 12.638 7.18L.047 20.211zm0 0"
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
