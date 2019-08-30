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
        <clipPath id="Slovakia_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__e">
          <path d="M3 5h12v14H3zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__g">
          <path d="M4 6h10v12H4zm0 0" />
        </clipPath>
        <clipPath id="Slovakia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Slovakia_svg_prefix__a)">
        <g clipPath="url(#Slovakia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Slovakia_svg_prefix__c)">
        <g clipPath="url(#Slovakia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Slovakia_svg_prefix__e)">
        <g clipPath="url(#Slovakia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M11.633 7.047c-1.715 0-2.645-1.2-2.645-1.2s-.93 1.2-2.644 1.2c-1.578 0-2.645-.996-2.645-.996v6.504c.047 4.285 5.285 6.054 5.285 6.054s5.282-1.77 5.282-6.054V6.05s-1.055.996-2.633.996zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Slovakia_svg_prefix__g)">
        <g clipPath="url(#Slovakia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M11.102 7.91c-1.372 0-2.114-.996-2.114-.996s-.746.996-2.117.996c-1.262 0-2.117-.828-2.117-.828v5.422c.039 3.566 4.23 5.043 4.23 5.043s4.227-1.477 4.227-5.043V7.082s-.844.828-2.11.828zm0 0"
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
