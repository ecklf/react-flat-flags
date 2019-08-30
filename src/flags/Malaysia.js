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
        <clipPath id="Malaysia_svg_prefix__a">
          <path d="M0 0h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__c">
          <path d="M0 6h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__e">
          <path d="M0 12h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__g">
          <path d="M0 18h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__i">
          <path d="M0 0h16v16H0zm0 0" />
        </clipPath>
        <clipPath id="Malaysia_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Malaysia_svg_prefix__a)">
        <g clipPath="url(#Malaysia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0-.004h36.988v3.195H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Malaysia_svg_prefix__c)">
        <g clipPath="url(#Malaysia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 6.379h36.988V9.57H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Malaysia_svg_prefix__e)">
        <g clipPath="url(#Malaysia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 12.227h36.988v3.195H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Malaysia_svg_prefix__g)">
        <g clipPath="url(#Malaysia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 18.078h36.988v3.192H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Malaysia_svg_prefix__i)">
        <g clipPath="url(#Malaysia_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 0h15.852v15.422H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M10.418 10.992c-.004.004-.012.004-.016.008a3.83 3.83 0 01-.57.219 3.57 3.57 0 01-4.59-3.54 3.644 3.644 0 014.75-3.422c.195.063.383.145.559.24.008 0 .011.003.015.003a.12.12 0 00.157-.078c.02-.05 0-.11-.043-.137a4.462 4.462 0 00-1.551-.879c-2.375-.765-4.938.54-5.73 2.914-.145.442-.223.89-.231 1.332-.012.438.043.887.172 1.332.68 2.395 3.183 3.766 5.59 3.063a4.557 4.557 0 001.59-.836.122.122 0 00.05-.137.123.123 0 00-.152-.082zm.434-4.453l.25-.738c.074-.215.187-.215.253 0l.266.84.031-.02.696-.5c.183-.129.289-.055.238.164l-.191.82.625.028c.226.012.265.133.09.273l-.473.387.566.441c.176.137.137.266-.086.282l-.808.066c-.028.004-.059.008-.09.016l.004.004.18.722c.054.219-.055.293-.243.172l-.453-.305-.21.621c-.075.211-.204.215-.286.008l-.316-.777-.02-.04-.07.04-.715.465c-.188.125-.29.047-.23-.168l.206-.727-.511-.043c-.223-.02-.258-.144-.082-.28l.476-.372-.047-.055-.578-.535c-.164-.152-.117-.273.11-.273l.836.008.027-.004-.277-.797c-.075-.211.02-.282.203-.157zm0 0"
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
