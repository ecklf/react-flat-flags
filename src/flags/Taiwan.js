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
        <clipPath id="Taiwan_svg_prefix__a">
          <path d="M0 0h17v13H0zm0 0" />
        </clipPath>
        <clipPath id="Taiwan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Taiwan_svg_prefix__a)">
        <g clipPath="url(#Taiwan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h16.383v12.762H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M11.754 7.707c0-.14.055-.352.121-.473l.219-.375a.505.505 0 000-.437l-.223-.387a1.151 1.151 0 01-.129-.469v-.449a.475.475 0 00-.219-.375l-.375-.215a1.2 1.2 0 01-.343-.343l-.215-.375a.475.475 0 00-.375-.22H9.77c-.137 0-.348-.058-.47-.124l-.382-.223a.472.472 0 00-.434 0l-.375.219c-.117.07-.328.129-.464.129h-.43a.482.482 0 00-.38.219l-.222.386a1.14 1.14 0 01-.34.344l-.382.227a.482.482 0 00-.22.379l.005.433c0 .137-.055.352-.125.469l-.215.375a.48.48 0 000 .437l.223.387c.07.121.125.332.125.473l.003.445c0 .14.098.309.22.379l.37.215c.121.07.278.222.344.344l.215.375c.07.12.238.218.379.218h.441c.14 0 .348.055.469.125l.387.223a.484.484 0 00.433-.004l.371-.219c.121-.066.332-.125.47-.125h.429a.475.475 0 00.375-.218l.223-.387c.07-.121.222-.277.343-.348l.383-.222a.495.495 0 00.215-.38zm0 0"
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
