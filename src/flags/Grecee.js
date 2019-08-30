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
        <clipPath id="Grecee_svg_prefix__i">
          <path d="M0 22h37v3H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__a">
          <path d="M0 5h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__c">
          <path d="M0 0h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__e">
          <path d="M0 11h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__g">
          <path d="M0 17h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__k">
          <path d="M0 0h15v15H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__m">
          <path d="M5 0h4v15H5zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__o">
          <path d="M0 5h15v5H0zm0 0" />
        </clipPath>
        <clipPath id="Grecee_svg_prefix__p">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Grecee_svg_prefix__a)">
        <g clipPath="url(#Grecee_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 5.848h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__c)">
        <g clipPath="url(#Grecee_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__e)">
        <g clipPath="url(#Grecee_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 11.168h36.988v3.187H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__g)">
        <g clipPath="url(#Grecee_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__i)">
        <g clipPath="url(#Grecee_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 22.863h36.988v3.192H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__k)">
        <g clipPath="url(#Grecee_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M0 0h14.266v14.355H0zm0 0"
            fillRule="evenodd"
            fill="#4989db"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__m)">
        <g clipPath="url(#Grecee_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M5.813 0h3.171v14.355H5.813zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Grecee_svg_prefix__o)">
        <g clipPath="url(#Grecee_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M0 5.848h14.266v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#fff"
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
