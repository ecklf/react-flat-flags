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
        <clipPath id="Egypt_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Egypt_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Egypt_svg_prefix__c">
          <path d="M0 7h37v11H0zm0 0" />
        </clipPath>
        <clipPath id="Egypt_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Egypt_svg_prefix__e">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Egypt_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Egypt_svg_prefix__a)">
        <g clipPath="url(#Egypt_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Egypt_svg_prefix__c)">
        <g clipPath="url(#Egypt_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 7.977h36.988v9.039H0zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Egypt_svg_prefix__e)">
        <g clipPath="url(#Egypt_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <path
        d="M19.383 9.043a.39.39 0 01.281.145l.461.636h-.738l.226 1.239h2.055l-1.703 4.355h-2.418l-1.695-4.355h2.05l.371-2.02zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
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
