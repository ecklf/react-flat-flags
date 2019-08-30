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
        <clipPath id="Nauru_svg_prefix__a">
          <path d="M0 12h37v2H0zm0 0" />
        </clipPath>
        <clipPath id="Nauru_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Nauru_svg_prefix__a)">
        <g clipPath="url(#Nauru_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 12.23h36.988v1.594H0zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <path
        d="M7.219 17.063l.394-1.375c.102-.352.282-.356.399-.012l.414 1.18.867-.676c.277-.215.457-.106.402.246l-.207 1.297 1.211.011c.352.004.422.203.156.442l-.796.719.843.597c.297.211.254.418-.101.453l-1.281.137.015.078.324 1.156c.098.352-.066.48-.367.29l-.86-.547-.273 1.011c-.09.34-.293.352-.453.024l-.558-1.149-.008.008-1.09.793c-.29.211-.457.094-.371-.262l.293-1.246-1.055-.058c-.355-.02-.43-.22-.164-.446l.832-.699-.867-.773c-.27-.235-.2-.438.152-.45l1.07-.027-.55-1.289c-.14-.332-.004-.45.305-.254l1.28.797zm0 0"
        fillRule="evenodd"
        fill="#fff"
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
