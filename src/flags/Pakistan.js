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
        <clipPath id="Pakistan_svg_prefix__a">
          <path d="M15 5h15v15H15zm0 0" />
        </clipPath>
        <clipPath id="Pakistan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Pakistan_svg_prefix__c">
          <path d="M0 0h10v25H0zm0 0" />
        </clipPath>
        <clipPath id="Pakistan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#Pakistan_svg_prefix__a)">
        <g clipPath="url(#Pakistan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M28.754 15.813a5.98 5.98 0 01-.707.66c-2.41 1.898-5.93 1.511-7.856-.864a5.424 5.424 0 01-.855-1.476 5.414 5.414 0 01-.398-1.656c-.235-3.032 2.07-5.676 5.148-5.91.32-.024.637-.02.95.011v-.004c.007.004.015.004.026 0a.187.187 0 00.172-.199.18.18 0 00-.144-.168 7.103 7.103 0 00-2.754-.34c-3.863.293-6.758 3.617-6.461 7.422.055.707.215 1.379.465 2.008.25.625.598 1.226 1.047 1.781 2.422 2.98 6.836 3.465 9.863 1.082a6.88 6.88 0 001.781-2.098.182.182 0 00-.011-.218.187.187 0 00-.266-.031zm-4.52-1.344c-.285.195-.449.086-.367-.25l.305-1.239c.086-.332-.063-.789-.328-1.011l-.93-.785c-.262-.223-.195-.414.152-.422l1.301-.035c.348-.012.711-.29.813-.618l.406-1.351c.098-.328.277-.336.394-.012l.489 1.336c.117.32.5.586.847.59l1.325.015c.347.004.418.188.156.415l-1.008.863c-.262.223-.398.676-.3 1.008l.32 1.09c.097.328-.067.453-.364.273l-1.074-.652c-.297-.176-.773-.164-1.058.035zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Pakistan_svg_prefix__c)">
        <g clipPath="url(#Pakistan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h9.512v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
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
