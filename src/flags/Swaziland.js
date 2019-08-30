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
        <clipPath id="Swaziland_svg_prefix__a">
          <path d="M0 4h37v18H0zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__c">
          <path d="M0 5h37v15H0zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__e">
          <path d="M8 10h22v2H8zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__g">
          <path d="M5 12h28v2H5zm0 0" />
        </clipPath>
        <clipPath id="Swaziland_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Swaziland_svg_prefix__a)">
        <g clipPath="url(#Swaziland_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 4.254h36.988V21.27H0zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Swaziland_svg_prefix__c)">
        <g clipPath="url(#Swaziland_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 5.848h36.988v13.828H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Swaziland_svg_prefix__e)">
        <g clipPath="url(#Swaziland_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M8.453 10.633H29.59v.535H8.453zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Swaziland_svg_prefix__g)">
        <g clipPath="url(#Swaziland_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M5.813 12.762h26.949v1.062H5.812zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <path
        d="M15.852 7.977c2.628 0 4.757 2.14 4.757 4.785 0 2.644-2.129 4.785-4.757 4.785-2.625 0-4.754-2.14-4.754-4.785s2.129-4.785 4.754-4.785zm0 0"
        fillRule="evenodd"
        fill="#434953"
      />
      <path
        d="M21.664 7.977c2.629 0 4.758 2.14 4.758 4.785 0 2.644-2.129 4.785-4.758 4.785-2.625 0-4.754-2.14-4.754-4.785s2.13-4.785 4.754-4.785zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
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
