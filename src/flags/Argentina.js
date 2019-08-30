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
        <clipPath id="Argentina_svg_prefix__a">
          <path d="M0 0h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Argentina_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Argentina_svg_prefix__c">
          <path d="M0 18h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Argentina_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Argentina_svg_prefix__e">
          <path d="M15 9h8v7h-8zm0 0" />
        </clipPath>
        <clipPath id="Argentina_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Argentina_svg_prefix__a)">
        <g clipPath="url(#Argentina_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v6.914H0zm0 0"
            fillRule="evenodd"
            fill="#8bb9e1"
          />
        </g>
      </g>
      <g clipPath="url(#Argentina_svg_prefix__c)">
        <g clipPath="url(#Argentina_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 18.078h36.988v6.914H0zm0 0"
            fillRule="evenodd"
            fill="#8bb9e1"
          />
        </g>
      </g>
      <g clipPath="url(#Argentina_svg_prefix__e)">
        <g clipPath="url(#Argentina_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.8 13.563c0-.141.055-.352.126-.473l.215-.375a.48.48 0 000-.438l-.223-.386a1.164 1.164 0 01-.125-.473v-.45a.49.49 0 00-.223-.374l-.37-.215a1.082 1.082 0 01-.345-.348l-.214-.375a.488.488 0 00-.38-.219h-.445c-.136 0-.347-.054-.468-.124l-.387-.223a.484.484 0 00-.434.004l-.37.219c-.122.07-.333.124-.47.124h-.43a.482.482 0 00-.378.22l-.223.386a1.082 1.082 0 01-.343.348l-.383.226a.489.489 0 00-.215.38v.433c.004.14-.055.351-.125.472l-.215.375a.505.505 0 000 .438l.223.387c.07.12.125.332.129.472v.446c0 .14.097.308.218.378l.375.215c.121.07.274.227.344.344l.215.379c.07.117.238.219.379.219h.441c.14 0 .352.054.469.125l.387.222a.492.492 0 00.437-.004l.371-.218c.117-.07.328-.125.469-.125h.43a.499.499 0 00.379-.22l.218-.39a1.2 1.2 0 01.344-.343l.383-.227a.488.488 0 00.219-.379zm0 0"
            fill="#f5bb41"
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
