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
        <clipPath id="Zambia_svg_prefix__a">
          <path d="M31 10h6v15h-6zm0 0" />
        </clipPath>
        <clipPath id="Zambia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zambia_svg_prefix__c">
          <path d="M26 10h6v15h-6zm0 0" />
        </clipPath>
        <clipPath id="Zambia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zambia_svg_prefix__e">
          <path d="M21 10h6v15h-6zm0 0" />
        </clipPath>
        <clipPath id="Zambia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <g clipPath="url(#Zambia_svg_prefix__a)">
        <g clipPath="url(#Zambia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M31.707 10.633h5.281v14.36h-5.281zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#Zambia_svg_prefix__c)">
        <g clipPath="url(#Zambia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M26.422 10.633h5.285v14.36h-5.285zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Zambia_svg_prefix__e)">
        <g clipPath="url(#Zambia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.137 10.633h5.285v14.36h-5.285zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M25.375 4.723l1.094-1.68c.136-.207.437-.379.664-.379h2.633l.875 5.32h-4.047l.531-3.261zm0 0"
        fill="#f5d55f"
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
