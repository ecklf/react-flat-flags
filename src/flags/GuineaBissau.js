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
        <clipPath id="GuineaBissau_svg_prefix__a">
          <path d="M0 12h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="GuineaBissau_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="GuineaBissau_svg_prefix__c">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="GuineaBissau_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
      />
      <g clipPath="url(#GuineaBissau_svg_prefix__a)">
        <g clipPath="url(#GuineaBissau_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v12.23H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#GuineaBissau_svg_prefix__c)">
        <g clipPath="url(#GuineaBissau_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h12.152v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M5.086 15.324c-.27.192-.422.086-.348-.238l.29-1.195c.077-.32-.063-.762-.31-.977l-.87-.758c-.25-.215-.184-.398.14-.41l1.219-.031c.328-.012.672-.277.762-.594l.383-1.309c.093-.316.257-.324.37-.011l.458 1.289c.113.312.468.57.797.574l1.242.012c.328.004.39.183.144.398l-.945.836c-.246.215-.371.652-.281.973l.3 1.05c.094.32-.062.438-.34.266L7.09 14.57c-.281-.172-.727-.156-.992.032zm0 0"
        fill="#434953"
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
