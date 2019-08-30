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
        <clipPath id="Maldives_svg_prefix__a">
          <path d="M3 4h31v17H3zm0 0" />
        </clipPath>
        <clipPath id="Maldives_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Maldives_svg_prefix__a)">
        <g clipPath="url(#Maldives_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M3.7 4.254h29.59v16.484H3.7zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M22.043 15.777c-.004.004-.012.004-.016.008-.18.086-.37.164-.57.219a3.57 3.57 0 01-4.59-3.54 3.644 3.644 0 014.75-3.422c.195.067.383.145.559.24.008 0 .012.003.02.003a.117.117 0 00.152-.078c.02-.05 0-.105-.043-.137a4.393 4.393 0 00-1.551-.875c-2.371-.77-4.938.535-5.73 2.914a4.63 4.63 0 00-.231 1.329c-.012.437.043.886.172 1.332.68 2.394 3.183 3.77 5.59 3.062a4.549 4.549 0 001.59-.832.126.126 0 00.05-.137.123.123 0 00-.152-.086zm0 0"
        fill="#f5f7f9"
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
