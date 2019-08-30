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
        <clipPath id="UnitedKingdom_svg_prefix__a">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__b">
          <path d="M0 9h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__c">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__d">
          <path d="M15 0h7v25h-7zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__e">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__f">
          <path d="M0 10h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__g">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__h">
          <path d="M16 0h5v25h-5zm0 0" />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_prefix__i">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g
        clipPath="url(#UnitedKingdom_svg_prefix__a)"
        clipRule="evenodd"
        fillRule="evenodd"
      >
        <path
          d="M-.29 26.434l-1.429-2.235L37.805-1.445 39.238.789zm0 0"
          fill="#fff"
        />
        <path
          d="M-.527 26.063l-.953-1.489L38.043-1.07 39 .418zm0 0"
          fill="#ed5565"
        />
        <path
          d="M37.684 26.586l1.421-2.219-39.27-25.43-1.42 2.215zm0 0"
          fill="#fff"
        />
        <path
          d="M37.922 26.215l.945-1.477L-.403-.692-1.351.786zm0 0"
          fill="#ed5565"
        />
      </g>
      <g clipPath="url(#UnitedKingdom_svg_prefix__b)">
        <g clipPath="url(#UnitedKingdom_svg_prefix__c)" clipRule="evenodd">
          <path
            d="M0 9.57h36.988v6.383H0zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedKingdom_svg_prefix__d)">
        <g clipPath="url(#UnitedKingdom_svg_prefix__e)" clipRule="evenodd">
          <path
            d="M15.324 0h6.34v24.992h-6.34zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedKingdom_svg_prefix__f)">
        <g clipPath="url(#UnitedKingdom_svg_prefix__g)" clipRule="evenodd">
          <path
            d="M0 10.633h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#UnitedKingdom_svg_prefix__h)">
        <g clipPath="url(#UnitedKingdom_svg_prefix__i)" clipRule="evenodd">
          <path
            d="M16.383 0h4.226v24.992h-4.226zm0 0"
            fillRule="evenodd"
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
