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
        <clipPath id="UnitedArabEmirates_svg_prefix__a">
          <path d="M0 0h10v25H0zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__c">
          <path d="M9 0h28v9H9zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__e">
          <path d="M9 8h28v10H9zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__g">
          <path d="M9 17h28v8H9zm0 0" />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#UnitedArabEmirates_svg_prefix__a)">
        <g clipPath="url(#UnitedArabEmirates_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h9.512v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedArabEmirates_svg_prefix__c)">
        <g clipPath="url(#UnitedArabEmirates_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M9.512 0H37.52v8.508H9.512zm0 0"
            fillRule="evenodd"
            fill="#52c161"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedArabEmirates_svg_prefix__e)">
        <g clipPath="url(#UnitedArabEmirates_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M9.512 8.508H37.52v8.508H9.512zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedArabEmirates_svg_prefix__g)">
        <g clipPath="url(#UnitedArabEmirates_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M9.512 17.016H37.52v8.507H9.512zm0 0"
            fillRule="evenodd"
            fill="#434953"
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
