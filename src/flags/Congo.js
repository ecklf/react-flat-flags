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
        <clipPath id="Congo_svg_prefix__a">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g
        clipPath="url(#Congo_svg_prefix__a)"
        clipRule="evenodd"
        fillRule="evenodd"
      >
        <path
          d="M39.996 2.36l-41.75 25.21-3.262-5.468 41.75-25.215zm0 0"
          fill="#f1d55f"
        />
        <path
          d="M38.941 1.297l-41.754 25.21-2.203-2.812 41.75-25.21zm0 0"
          fill="#ed5565"
        />
      </g>
      <path
        d="M4.156 8.938c-.293.207-.46.09-.379-.262l.317-1.305c.082-.351-.07-.832-.34-1.066l-.95-.825c-.269-.234-.199-.437.157-.445l1.328-.039c.356-.012.73-.3.832-.648l.414-1.426c.102-.344.285-.352.406-.012l.5 1.406c.122.34.508.622.864.625l1.355.012c.356.004.43.203.16.438l-1.03.91c-.27.238-.407.715-.31 1.058l.329 1.149c.101.347-.067.476-.368.289L6.34 8.113c-.305-.187-.79-.172-1.082.035zm0 0"
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
