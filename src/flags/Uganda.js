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
        <clipPath id="Uganda_svg_prefix__a">
          <path d="M0 0h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__c">
          <path d="M0 4h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__e">
          <path d="M0 12h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__g">
          <path d="M0 17h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Uganda_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Uganda_svg_prefix__a)">
        <g clipPath="url(#Uganda_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Uganda_svg_prefix__c)">
        <g clipPath="url(#Uganda_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 4.254h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <g clipPath="url(#Uganda_svg_prefix__e)">
        <g clipPath="url(#Uganda_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Uganda_svg_prefix__g)">
        <g clipPath="url(#Uganda_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <path
        d="M17.965 8.508c2.336 0 4.23 1.906 4.23 4.254 0 2.347-1.894 4.254-4.23 4.254-2.332 0-4.227-1.907-4.227-4.254 0-2.348 1.895-4.254 4.227-4.254zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
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
