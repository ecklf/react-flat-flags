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
        <clipPath id="KoreaNorth_svg_prefix__a">
          <path d="M0 0h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__c">
          <path d="M0 21h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__e">
          <path d="M0 5h37v15H0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__g">
          <path d="M2 9h9v8H2zm0 0" />
        </clipPath>
        <clipPath id="KoreaNorth_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#KoreaNorth_svg_prefix__a)">
        <g clipPath="url(#KoreaNorth_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v3.723H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#KoreaNorth_svg_prefix__c)">
        <g clipPath="url(#KoreaNorth_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 21.27h36.988v3.722H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#KoreaNorth_svg_prefix__e)">
        <g clipPath="url(#KoreaNorth_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 5.848h36.988V19.14H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#KoreaNorth_svg_prefix__g)">
        <g clipPath="url(#KoreaNorth_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M6.34 9.04c2.043 0 3.7 1.667 3.7 3.722 0 2.054-1.657 3.722-3.7 3.722s-3.7-1.668-3.7-3.722c0-2.055 1.657-3.723 3.7-3.723zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
          <path
            d="M4.414 16.363c-.34.242-.539.106-.437-.304l.363-1.524c.098-.406-.078-.965-.395-1.242l-1.105-.961c-.313-.277-.235-.512.183-.523l1.547-.043c.414-.012.852-.352.97-.754l.483-1.664c.118-.403.329-.41.47-.016l.585 1.64c.14.4.594.727 1.008.731l1.582.016c.414.004.496.234.184.508l-1.204 1.062c-.312.277-.472.832-.359 1.238l.387 1.34c.113.403-.078.555-.434.332l-1.285-.797c-.352-.218-.918-.203-1.258.04zm0 0"
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
