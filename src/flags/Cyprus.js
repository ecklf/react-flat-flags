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
        <clipPath id="Cyprus_svg_prefix__a">
          <path d="M0 0h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Cyprus_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Cyprus_svg_prefix__c">
          <path d="M0 20h37v5H0zm0 0" />
        </clipPath>
        <clipPath id="Cyprus_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Cyprus_svg_prefix__a)">
        <g clipPath="url(#Cyprus_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Cyprus_svg_prefix__c)">
        <g clipPath="url(#Cyprus_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 20.738h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M20.93 16.55c-.008.005-.016.005-.02.009h-.004c-.218.109-.449.199-.691.273-2.32.691-4.73-.656-5.39-3.012a4.552 4.552 0 01-.16-1.363 4.48 4.48 0 01.222-1.36c.761-2.335 3.234-3.62 5.523-2.867a4.815 4.815 0 01.7.301c.078.028.16-.02.187-.097a.16.16 0 00-.055-.172 5.371 5.371 0 00-1.879-1.082c-2.87-.946-5.972.668-6.933 3.601a5.88 5.88 0 00-.282 1.64 5.716 5.716 0 00.207 1.65c.829 2.956 3.856 4.652 6.77 3.784a5.55 5.55 0 001.926-1.03.169.169 0 00.062-.173.149.149 0 00-.183-.101zm-.399-1.831c-.226.148-.351.054-.281-.211l.277-.996a.91.91 0 00-.226-.825l-.7-.66c-.199-.191-.14-.343.133-.34l1.012.008a.73.73 0 00.652-.476l.356-1.082c.09-.266.226-.262.308 0l.34 1.093a.761.761 0 00.645.504l1.031.047c.27.012.32.168.11.34l-.813.672c-.21.172-.332.535-.266.805l.22.89c.066.27-.067.364-.294.211l-.816-.554a.81.81 0 00-.824-.004zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
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
