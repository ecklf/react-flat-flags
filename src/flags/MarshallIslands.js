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
        <clipPath id="MarshallIslands_svg_prefix__a">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="MarshallIslands_svg_prefix__b">
          <path d="M0 4h37v21H0zm0 0" />
        </clipPath>
        <clipPath id="MarshallIslands_svg_prefix__c">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#MarshallIslands_svg_prefix__a)" clipRule="evenodd">
        <path
          d="M.008 24.836L38.449 0l-.004 4.621L.008 25.523zm0 0"
          fill="#f5d55f"
        />
      </g>
      <g clipPath="url(#MarshallIslands_svg_prefix__b)">
        <g clipPath="url(#MarshallIslands_svg_prefix__c)" clipRule="evenodd">
          <path
            d="M1.473 25.418L38.574 9.426l-.008-5.074L.13 25.422zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <path
        d="M8.766 2.973l-.22 3.52L7.61 4.25l.36 2.387-1.45-1.93.954 2.203-1.907-1.46 1.48 1.835-2.151-.945L6.78 7.75l-2.347-.305 2.218.867-3.48.317 3.488.23-2.21.895 2.323-.309-1.878 1.371 2.18-.945-1.49 1.848 1.895-1.414-.937 2.152 1.516-1.871-.41 2.332.953-2.18.214 3.446.336-3.438.82 2.195-.312-2.363 1.508 1.871-.992-2.187 1.894 1.508-1.504-1.883 2.246.925-1.988-1.437 2.422.406-2.32-.879 3.61-.222-3.61-.332 2.375-.782-2.461.305 2.035-1.402-2.293.91 1.582-1.895-1.926 1.485.926-2.274L9.668 6.63l.32-2.41-.886 2.273zm0 0"
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
