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
        <clipPath id="Macedonia_svg_prefix__a">
          <path d="M0 0h15v10H0zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__c">
          <path d="M22 0h15v10H22zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__e">
          <path d="M0 16h15v9H0zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__g">
          <path d="M22 16h15v9H22zm0 0" />
        </clipPath>
        <clipPath id="Macedonia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Macedonia_svg_prefix__a)">
        <g clipPath="url(#Macedonia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M-.871 3.234l2.64-5.136 12.762 9.62-1.054 1.313zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Macedonia_svg_prefix__c)">
        <g clipPath="url(#Macedonia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M38.043 3.125l-2.629-5.246-12.691 9.828 1.05 1.34zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Macedonia_svg_prefix__e)">
        <g clipPath="url(#Macedonia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M-1.055 22.29l2.657 5.136 12.82-9.621-1.063-1.313zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <g clipPath="url(#Macedonia_svg_prefix__g)">
        <g clipPath="url(#Macedonia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M38.043 22.398l-2.64 5.247-12.75-9.829 1.054-1.34zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <path
        d="M18.758 8.262c2.324 0 4.207 1.898 4.207 4.234 0 2.336-1.883 4.23-4.207 4.23-2.32 0-4.203-1.894-4.203-4.23 0-2.336 1.883-4.234 4.203-4.234zm0 0M15.852 0h5.285L19.55 6.914h-2.113zm0 0M15.852 24.992h5.285l-1.586-6.914h-2.113zm0 0M36.988 15.422v-5.32l-12.68 1.597v2.125zm0 0M0 15.422v-5.32l13.21 1.597v2.125zm0 0"
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
