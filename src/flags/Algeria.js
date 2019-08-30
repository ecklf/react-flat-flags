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
        <clipPath id="Algeria_svg_prefix__a">
          <path d="M0 0h19v25H0zm0 0" />
        </clipPath>
        <clipPath id="Algeria_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#fff"
      />
      <g clipPath="url(#Algeria_svg_prefix__a)">
        <g clipPath="url(#Algeria_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h18.496v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#56a862"
          />
        </g>
      </g>
      <path
        d="M22.098 17.27c-.008.003-.016.003-.024.007-.258.141-.531.262-.816.36-2.758.945-5.766-.532-6.727-3.29a5.254 5.254 0 01-.289-1.605 5.14 5.14 0 01.176-1.62c.758-2.81 3.66-4.458 6.477-3.684.293.082.574.187.84.312v-.004l.023.012a.184.184 0 00.222-.13.184.184 0 00-.078-.198 6.638 6.638 0 00-2.343-1.184c-3.54-.973-7.18 1.102-8.133 4.629a6.75 6.75 0 00-.227 1.957c.024.648.145 1.3.367 1.945 1.204 3.461 4.985 5.313 8.442 4.13a6.51 6.51 0 002.258-1.321.178.178 0 00.062-.203.18.18 0 00-.23-.113zm-1.785-1.946c-.27.188-.426.078-.344-.238l.3-1.184c.083-.32-.05-.757-.3-.972l-.867-.762c-.25-.219-.18-.398.148-.406l1.23-.02c.329-.004.676-.265.774-.578l.398-1.293c.098-.312.266-.316.375-.008l.45 1.285c.105.313.464.57.793.579l1.253.027c.329.008.395.184.141.398l-.96.817c-.25.21-.388.644-.298.96l.293 1.048c.09.316-.066.433-.347.257l-1.012-.636c-.277-.172-.727-.164-.996.023zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
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
