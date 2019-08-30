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
        <clipPath id="Liechtenstein_svg_prefix__a">
          <path d="M0 0h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Liechtenstein_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Liechtenstein_svg_prefix__a)">
        <g clipPath="url(#Liechtenstein_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v12.23H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M11.078 4.844c-.312.394-.824.398-1.14.004L9.03 3.715c-.316-.395-.832-.395-1.144 0l-.903 1.133c-.312.394-.828.394-1.144 0L4.723 3.44c-.317-.394-.535-.3-.489.204l.41 4.476c.047.504.493.918.993.918h5.656c.5 0 .945-.414.992-.918l.39-4.484c.044-.508-.175-.598-.488-.2zm0 0"
        fill="#f5bb41"
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
