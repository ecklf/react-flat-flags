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
        <clipPath id="Uzbekistan_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Uzbekistan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uzbekistan_svg_prefix__c">
          <path d="M0 9h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Uzbekistan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uzbekistan_svg_prefix__e">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Uzbekistan_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Uzbekistan_svg_prefix__a)">
        <g clipPath="url(#Uzbekistan_svg_prefix__b)" clipRule="evenodd">
          <path d="M0 0h37.52v8.508H0zm0 0" fillRule="evenodd" fill="#3bafd9" />
        </g>
      </g>
      <g clipPath="url(#Uzbekistan_svg_prefix__c)">
        <g clipPath="url(#Uzbekistan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 9.57h37.52v6.383H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Uzbekistan_svg_prefix__e)">
        <g clipPath="url(#Uzbekistan_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 17.016h37.52v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <path
        d="M7.71 6.57c-.003.004-.007.004-.01.004a2.492 2.492 0 01-3.512-1.563 2.568 2.568 0 01-.098-.78c.004-.258.047-.516.133-.774.437-1.336 1.867-2.07 3.187-1.64.14.046.27.101.395.167.004 0 .008.004.011.004.043.016.094-.011.11-.054a.09.09 0 00-.031-.098 3.073 3.073 0 00-1.086-.617C5.149.676 3.355 1.598 2.8 3.273a3.242 3.242 0 00-.043 1.879 3.135 3.135 0 003.91 2.164 3.174 3.174 0 001.113-.59.085.085 0 00.035-.097c-.011-.047-.058-.07-.105-.059zm0 0"
        fill="#fff"
      />
      <path
        d="M9.512 6.379a.53.53 0 01.527.535.528.528 0 11-1.055 0 .53.53 0 01.528-.535zm0 0M11.625 6.379a.53.53 0 01.527.535.528.528 0 11-1.054 0 .53.53 0 01.527-.535zm0 0M11.625 4.254c.293 0 .527.238.527.531a.528.528 0 11-1.054 0c0-.293.234-.531.527-.531zm0 0M13.738 2.125a.53.53 0 01.528.535.528.528 0 11-1.055 0 .53.53 0 01.527-.535zm0 0M13.738 4.254c.293 0 .528.238.528.531a.528.528 0 11-1.055 0c0-.293.234-.531.527-.531zm0 0M13.738 6.379a.53.53 0 01.528.535.528.528 0 11-1.055 0 .53.53 0 01.527-.535zm0 0M15.852 2.125a.533.533 0 010 1.066.531.531 0 01-.528-.53c0-.298.239-.536.528-.536zm0 0M15.852 4.254a.532.532 0 010 1.062.531.531 0 010-1.062zm0 0M15.852 6.379a.533.533 0 010 1.066.531.531 0 01-.528-.53c0-.298.239-.536.528-.536zm0 0M17.965 2.125a.533.533 0 010 1.066.531.531 0 01-.527-.53c0-.298.238-.536.527-.536zm0 0M17.965 4.254a.532.532 0 010 1.062.531.531 0 010-1.062zm0 0M17.965 6.379a.533.533 0 010 1.066.531.531 0 01-.527-.53c0-.298.238-.536.527-.536zm0 0"
        fillRule="evenodd"
        fill="#f9fdfd"
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
