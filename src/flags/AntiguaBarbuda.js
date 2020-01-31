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
        <clipPath id="AntiguaBarbuda_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__c">
          <path d="M13 3h11v11H13zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__e">
          <path d="M0 8h37v10H0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__g">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__i">
          <path d="M0 0h19v25H0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__k">
          <path d="M18 0h19v25H18zm0 0" />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__a)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__c)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M18.23 3.723c2.774 0 5.02 2.261 5.02 5.05 0 2.79-2.246 5.051-5.02 5.051-2.773 0-5.02-2.261-5.02-5.05 0-2.79 2.247-5.051 5.02-5.051zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__e)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 8.508h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#3bafd9"
          />
        </g>
      </g>
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__g)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__i)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 0l18.496 24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#AntiguaBarbuda_svg_prefix__k)">
        <g clipPath="url(#AntiguaBarbuda_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M36.988 0L18.496 24.992h18.492zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
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
