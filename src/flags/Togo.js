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
        <clipPath id="Togo_svg_prefix__a">
          <path d="M0 0h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__c">
          <path d="M0 0h15v13H0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__e">
          <path d="M2 1h10v10H2zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__g">
          <path d="M0 12h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Togo_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#Togo_svg_prefix__a)">
        <g clipPath="url(#Togo_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v6.379H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#Togo_svg_prefix__c)">
        <g clipPath="url(#Togo_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h14.266v12.762H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Togo_svg_prefix__e)">
        <g clipPath="url(#Togo_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M4.836 10.082c-.39.258-.61.102-.484-.355l.46-1.692c.125-.453-.058-1.086-.402-1.402L3.191 5.52c-.347-.32-.246-.579.22-.579h1.75c.468.004.972-.363 1.116-.812l.602-1.844c.148-.45.387-.45.531 0l.606 1.856c.148.445.652.828 1.117.847l1.785.067c.469.02.555.277.191.578L9.72 6.78c-.364.297-.563.914-.446 1.371l.391 1.512c.117.457-.105.617-.5.36L7.742 9.09c-.39-.258-1.031-.254-1.422.004zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Togo_svg_prefix__g)">
        <g clipPath="url(#Togo_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v6.379H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
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
