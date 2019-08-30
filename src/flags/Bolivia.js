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
        <clipPath id="Bolivia_svg_prefix__a">
          <path d="M0 8h37v10H0zm0 0" />
        </clipPath>
        <clipPath id="Bolivia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Bolivia_svg_prefix__c">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Bolivia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Bolivia_svg_prefix__e">
          <path d="M15 9h8v7h-8zm0 0" />
        </clipPath>
        <clipPath id="Bolivia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Bolivia_svg_prefix__a)">
        <g clipPath="url(#Bolivia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 8.508h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#Bolivia_svg_prefix__c)">
        <g clipPath="url(#Bolivia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Bolivia_svg_prefix__e)">
        <g clipPath="url(#Bolivia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.8 13.563c0-.141.055-.352.126-.473l.215-.375a.48.48 0 000-.438l-.223-.386a1.164 1.164 0 01-.125-.473l-.004-.45a.475.475 0 00-.219-.374l-.37-.215a1.082 1.082 0 01-.345-.348l-.218-.375a.475.475 0 00-.375-.219h-.446c-.136 0-.347-.054-.468-.124l-.387-.223a.484.484 0 00-.434.004l-.37.219c-.122.07-.333.124-.47.124h-.433a.48.48 0 00-.375.22l-.223.386c-.07.121-.222.277-.343.348l-.383.226a.489.489 0 00-.215.38v.433c0 .14-.055.351-.125.472l-.215.375a.505.505 0 000 .438l.223.387c.07.12.125.332.129.472v.446c0 .14.097.312.218.378l.375.215c.121.07.274.227.344.344l.215.379c.07.117.238.219.375.219h.445c.14 0 .352.054.469.125l.387.222a.492.492 0 00.437-.004l.371-.218c.117-.07.328-.125.469-.125h.43a.485.485 0 00.375-.22l.222-.39a1.2 1.2 0 01.344-.343l.383-.227a.488.488 0 00.219-.379zm0 0"
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
