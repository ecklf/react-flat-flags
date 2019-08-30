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
        <clipPath id="Lebanon_svg_prefix__a">
          <path d="M0 0h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Lebanon_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Lebanon_svg_prefix__c">
          <path d="M0 20h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Lebanon_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Lebanon_svg_prefix__a)">
        <g clipPath="url(#Lebanon_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Lebanon_svg_prefix__c)">
        <g clipPath="url(#Lebanon_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 20.738h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M18.496 10.633c1.164 0 2.113.953 2.113 2.129a2.12 2.12 0 01-2.113 2.125 2.117 2.117 0 01-2.113-2.125 2.12 2.12 0 012.113-2.13zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <path
        d="M22.488 16.605c.192 0 .274-.132.188-.3l-1.442-2.684c-.09-.164-.004-.3.188-.3h.336c.191 0 .262-.126.156-.282L20.07 10.32c-.105-.156-.035-.285.157-.285h.34c.19 0 .257-.125.144-.277l-1.984-2.73c-.11-.153-.293-.153-.407-.005l-2.05 2.739c-.114.148-.047.273.144.273h.34c.191 0 .262.13.156.285l-1.848 2.72c-.105.155-.035.28.16.28h.337c.191 0 .277.137.187.301l-1.441 2.684c-.09.168-.004.3.187.3h3.094c.191 0 .348.153.348.34v.793c0 .188.156.34.347.34h.465a.344.344 0 00.348-.34v-.793c0-.187.16-.34.351-.34zm0 0"
        fill="#57a763"
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
