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
        <clipPath id="Croatia_svg_prefix__a">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__c">
          <path d="M0 0h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__e">
          <path d="M13 4h12v17H13zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__g">
          <path d="M13 5h11v15H13zm0 0" />
        </clipPath>
        <clipPath id="Croatia_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Croatia_svg_prefix__a)">
        <g clipPath="url(#Croatia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v7.976H0zm0 0"
            fillRule="evenodd"
            fill="#4658a9"
          />
        </g>
      </g>
      <g clipPath="url(#Croatia_svg_prefix__c)">
        <g clipPath="url(#Croatia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h36.988v7.977H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Croatia_svg_prefix__e)">
        <g clipPath="url(#Croatia_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.54 6.234c-1.802 0-2.774-1.449-2.774-1.449s-.977 1.45-2.778 1.45c-1.66 0-2.777-1.204-2.777-1.204v7.86c.05 5.175 5.547 7.316 5.547 7.316s5.55-2.14 5.55-7.316V5.03S23.2 6.234 21.54 6.234zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Croatia_svg_prefix__g)">
        <g clipPath="url(#Croatia_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M20.879 7.098c-1.543 0-2.379-1.25-2.379-1.25s-.836 1.25-2.379 1.25c-1.422 0-2.383-1.035-2.383-1.035v6.773c.043 4.46 4.758 6.305 4.758 6.305s4.754-1.844 4.754-6.305V6.062s-.95 1.036-2.371 1.036zm0 0"
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
