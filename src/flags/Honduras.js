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
        <clipPath id="Honduras_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Honduras_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Honduras_svg_prefix__c">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Honduras_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Honduras_svg_prefix__a)">
        <g clipPath="url(#Honduras_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#3bafd9"
          />
        </g>
      </g>
      <g clipPath="url(#Honduras_svg_prefix__c)">
        <g clipPath="url(#Honduras_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#3bafd9"
          />
        </g>
      </g>
      <path
        d="M18.074 13.781c-.12.086-.191.04-.156-.11l.133-.542a.489.489 0 00-.14-.441l-.395-.348c-.114-.098-.082-.18.062-.184l.555-.015a.4.4 0 00.344-.27l.171-.594c.043-.144.118-.148.168-.007l.207.59c.051.14.211.257.36.257l.562.008c.149 0 .18.082.067.18l-.426.379a.463.463 0 00-.129.441l.137.48c.039.145-.028.196-.157.118l-.457-.286a.434.434 0 00-.445.016zm0 0M12.262 12.188c-.121.085-.192.039-.157-.11l.133-.543a.503.503 0 00-.14-.445l-.395-.344c-.113-.098-.082-.18.063-.184l.554-.015a.41.41 0 00.344-.274l.172-.593c.043-.145.117-.145.168-.004l.207.586c.05.14.21.258.36.261l.562.004c.148.004.18.086.066.184l-.426.379a.463.463 0 00-.128.441l.136.477c.04.144-.027.199-.156.12l-.457-.284a.434.434 0 00-.445.015zm0 0M12.262 15.91c-.121.086-.192.035-.157-.11l.133-.542a.503.503 0 00-.14-.445l-.395-.344c-.113-.098-.082-.18.063-.188l.554-.015a.4.4 0 00.344-.27l.172-.594c.043-.144.117-.144.168-.004l.207.586c.05.141.21.258.36.262l.562.004c.148 0 .18.082.066.184l-.426.379a.463.463 0 00-.128.44l.136.477c.04.145-.027.2-.156.122l-.457-.286a.425.425 0 00-.445.016zm0 0M23.887 12.188c-.121.085-.192.039-.157-.11l.133-.543a.493.493 0 00-.14-.445l-.395-.344c-.113-.098-.082-.18.067-.184l.55-.015a.405.405 0 00.344-.274l.172-.593c.043-.145.117-.145.168-.004l.207.586c.05.14.215.258.36.261l.562.004c.148.004.18.086.066.184l-.426.379a.463.463 0 00-.128.441l.136.477c.04.144-.027.199-.156.12l-.457-.284a.434.434 0 00-.445.015zm0 0M23.887 15.91c-.121.086-.192.035-.157-.11l.133-.542a.493.493 0 00-.14-.445l-.395-.344c-.113-.098-.082-.18.067-.188l.55-.015a.395.395 0 00.344-.27l.172-.594c.043-.144.117-.144.168-.004l.207.586c.05.141.215.258.36.262l.562.004c.148 0 .18.082.066.184l-.426.379a.463.463 0 00-.128.44l.136.477c.04.145-.027.2-.156.122l-.457-.286a.425.425 0 00-.445.016zm0 0"
        fill="#3bafd9"
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
