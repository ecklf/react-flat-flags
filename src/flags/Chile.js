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
        <clipPath id="Chile_svg_prefix__a">
          <path d="M0 0h15v12H0zm0 0" />
        </clipPath>
        <clipPath id="Chile_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Chile_svg_prefix__c">
          <path d="M4 3h6v5H4zm0 0" />
        </clipPath>
        <clipPath id="Chile_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Chile_svg_prefix__e">
          <path d="M0 11h37v14H0zm0 0" />
        </clipPath>
        <clipPath id="Chile_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Chile_svg_prefix__a)">
        <g clipPath="url(#Chile_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h14.266v11.168H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Chile_svg_prefix__c)">
        <g clipPath="url(#Chile_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M5.89 7.898c-.218.157-.343.067-.28-.195l.234-.98a.888.888 0 00-.254-.797l-.711-.621c-.203-.176-.149-.325.117-.332l.996-.028a.714.714 0 00.621-.488l.313-1.07c.078-.258.215-.262.304-.008l.375 1.055c.09.253.383.464.649.468l1.016.012c.27 0 .32.149.12.324l-.773.684c-.203.176-.305.535-.23.797l.246.86c.074.26-.051.355-.278.214l-.828-.512a.79.79 0 00-.808.028zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Chile_svg_prefix__e)">
        <g clipPath="url(#Chile_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 11.168h36.988v13.824H0zm0 0"
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
