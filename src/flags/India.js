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
        <clipPath id="India_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="India_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="India_svg_prefix__c">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="India_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#India_svg_prefix__a)">
        <g clipPath="url(#India_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#fb6d51"
          />
        </g>
      </g>
      <g clipPath="url(#India_svg_prefix__c)">
        <g clipPath="url(#India_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <path
        d="M21.617 12.563l-.203-.36a.985.985 0 01-.117-.433l-.004-.415a.436.436 0 00-.203-.347l-.344-.2a1.02 1.02 0 01-.316-.316l-.2-.347a.446.446 0 00-.347-.204h-.41c-.13 0-.32-.05-.434-.113l-.355-.207a.443.443 0 00-.403.004l-.343.2a.968.968 0 01-.43.116h-.399a.446.446 0 00-.347.204l-.203.359c-.067.11-.207.254-.317.316l-.355.207a.456.456 0 00-.2.352v.402a.994.994 0 01-.113.434l-.199.348a.455.455 0 000 .402l.207.36c.063.109.113.304.117.433v.414c0 .125.09.285.203.348l.344.199c.11.062.254.207.317.316l.199.348c.062.11.218.203.347.203h.41c.13 0 .325.05.434.113l.356.207c.109.063.293.063.402-.004l.344-.199a.983.983 0 01.43-.117h.398a.446.446 0 00.347-.203l.207-.36c.063-.109.204-.253.313-.316l.355-.21c.11-.063.2-.224.2-.349v-.402c0-.129.05-.324.113-.434l.2-.347a.455.455 0 000-.402zm-1.234.324l-.121.207a.7.7 0 00-.067.265v.243a.277.277 0 01-.12.21l-.216.126a.639.639 0 00-.191.19l-.121.22a.277.277 0 01-.211.12h-.242a.608.608 0 00-.262.071l-.207.121a.265.265 0 01-.242.004l-.215-.125a.608.608 0 00-.262-.07h-.25a.27.27 0 01-.207-.121l-.12-.211a.639.639 0 00-.192-.192l-.211-.12a.27.27 0 01-.121-.212v-.25a.623.623 0 00-.07-.261l-.126-.215a.273.273 0 010-.246l.121-.207a.64.64 0 00.07-.266l-.003-.242a.27.27 0 01.121-.211l.215-.125a.61.61 0 00.191-.195l.125-.215a.27.27 0 01.207-.121h.242a.608.608 0 00.262-.07l.207-.126a.265.265 0 01.242 0l.215.125c.067.04.188.07.262.07h.25c.074 0 .172.055.21.122l.118.21c.04.067.125.153.191.192l.211.121a.264.264 0 01.122.211v.25c0 .074.035.195.07.262l.125.215c.039.066.039.175 0 .246zm0 0"
        fill="#4757a9"
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
