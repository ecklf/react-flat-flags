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
        <clipPath id="Zimbabwe_svg_prefix__a">
          <path d="M0 4h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__c">
          <path d="M0 17h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__e">
          <path d="M0 7h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__g">
          <path d="M0 13h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__i">
          <path d="M0 10h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__k">
          <path d="M0 0h15v25H0zm0 0" />
        </clipPath>
        <clipPath id="Zimbabwe_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#51c161"
      />
      <g clipPath="url(#Zimbabwe_svg_prefix__a)">
        <g clipPath="url(#Zimbabwe_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 4.254h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <g clipPath="url(#Zimbabwe_svg_prefix__c)">
        <g clipPath="url(#Zimbabwe_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <g clipPath="url(#Zimbabwe_svg_prefix__e)">
        <g clipPath="url(#Zimbabwe_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 7.445h36.988v3.188H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Zimbabwe_svg_prefix__g)">
        <g clipPath="url(#Zimbabwe_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 13.824h36.988v3.192H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Zimbabwe_svg_prefix__i)">
        <g clipPath="url(#Zimbabwe_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 10.633h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Zimbabwe_svg_prefix__k)">
        <g clipPath="url(#Zimbabwe_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M-.527 0l15.324 12.762-15.324 12.23zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <path
        d="M2.121 11.633L3.22 9.957c.136-.21.433-.379.664-.379h2.633l.875 5.32H3.34l.535-3.265zm0 0"
        fill="#f5d55f"
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
