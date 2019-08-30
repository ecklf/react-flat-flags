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
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__a">
          <path d="M12 9h6v6h-6zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__c">
          <path d="M15 12h7v6h-7zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__e">
          <path d="M19 9h6v6h-6zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__g">
          <path d="M0 0h11v25H0zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__i">
          <path d="M26 0h11v25H26zm0 0" />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#SaintVincentAndGrenadines_svg_prefix__a)">
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_prefix__b)"
          clipRule="evenodd"
        >
          <path
            d="M12.516 11.7l2.617-2.634 2.613 2.633-2.613 2.633zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SaintVincentAndGrenadines_svg_prefix__c)">
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_prefix__d)"
          clipRule="evenodd"
        >
          <path
            d="M15.879 15.082l2.617-2.633 2.613 2.633-2.613 2.633zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SaintVincentAndGrenadines_svg_prefix__e)">
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_prefix__f)"
          clipRule="evenodd"
        >
          <path
            d="M19.242 11.7l2.617-2.634 2.614 2.633-2.614 2.633zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SaintVincentAndGrenadines_svg_prefix__g)">
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_prefix__h)"
          clipRule="evenodd"
        >
          <path
            d="M0 0h10.57v25.523H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#SaintVincentAndGrenadines_svg_prefix__i)">
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_prefix__j)"
          clipRule="evenodd"
        >
          <path
            d="M26.422 0h10.566v25.523H26.422zm0 0"
            fillRule="evenodd"
            fill="#57a763"
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
