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
        <clipPath id="BurkinaFaso_svg_prefix__a">
          <path d="M0 12h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="BurkinaFaso_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#BurkinaFaso_svg_prefix__a)">
        <g clipPath="url(#BurkinaFaso_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 12.23h36.988v12.762H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <path
        d="M15.883 16.867c-.414.297-.653.13-.531-.367l.441-1.848c.121-.496-.094-1.175-.477-1.507l-1.343-1.172c-.383-.332-.286-.618.218-.633l1.883-.05c.504-.017 1.031-.43 1.176-.919l.59-2.023c.14-.489.398-.496.57-.016l.711 1.992c.168.48.723.88 1.227.887l1.918.02c.504.003.605.28.226.617l-1.46 1.289c-.384.332-.579 1.011-.438 1.5l.468 1.629c.141.488-.097.672-.527.406l-1.558-.969c-.43-.27-1.122-.246-1.532.05zm0 0"
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
