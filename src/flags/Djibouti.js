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
        <clipPath id="Djibouti_svg_prefix__a">
          <path d="M0 12h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Djibouti_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Djibouti_svg_prefix__c">
          <path d="M0 0h14v25H0zm0 0" />
        </clipPath>
        <clipPath id="Djibouti_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Djibouti_svg_prefix__e">
          <path d="M2 10h6v5H2zm0 0" />
        </clipPath>
        <clipPath id="Djibouti_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#8bb9e1"
      />
      <g clipPath="url(#Djibouti_svg_prefix__a)">
        <g clipPath="url(#Djibouti_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v12.23H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Djibouti_svg_prefix__c)">
        <g clipPath="url(#Djibouti_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0l13.21 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Djibouti_svg_prefix__e)">
        <g clipPath="url(#Djibouti_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M3.777 14.813c-.218.152-.343.066-.28-.196l.233-.98a.888.888 0 00-.253-.797l-.711-.621c-.204-.176-.149-.328.117-.336l.996-.028a.716.716 0 00.621-.484l.313-1.07c.078-.258.21-.262.304-.008l.375 1.055c.09.254.383.464.649.468l1.015.008c.266.004.32.153.121.328l-.773.684a.83.83 0 00-.23.793l.246.863c.074.258-.051.356-.278.215l-.828-.512a.781.781 0 00-.809.024zm0 0"
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
