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
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#3bafd9"
      />
      <path
        d="M23.645 14.035c0-.238.093-.594.21-.8l.364-.633a.827.827 0 000-.743l-.375-.656a1.895 1.895 0 01-.215-.797l-.004-.758a.823.823 0 00-.371-.64l-.633-.363a1.881 1.881 0 01-.582-.582l-.363-.637a.816.816 0 00-.637-.371h-.754c-.234 0-.59-.094-.793-.211l-.652-.375a.807.807 0 00-.738.004l-.63.367a1.878 1.878 0 01-.792.215h-.73c-.231 0-.52.168-.637.37l-.376.657a1.924 1.924 0 01-.578.586l-.652.379a.817.817 0 00-.363.644v.735c.004.234-.094.594-.211.797l-.363.636a.827.827 0 000 .743l.375.656c.117.203.214.562.214.797l.004.758a.81.81 0 00.371.636l.633.367c.203.118.465.38.582.582l.364.637a.818.818 0 00.636.367h.754c.235 0 .59.098.793.215l.656.375a.8.8 0 00.735-.004l.629-.367c.203-.121.558-.219.793-.219h.73c.234 0 .52-.164.637-.367l.375-.656c.117-.203.379-.469.582-.586l.648-.383a.819.819 0 00.367-.64zm0 0"
        fill="#f5d55f"
      />
      <path
        d="M3.172 5.316h3.7v2.13h-3.7zm0 0M3.172 8.508h3.7v2.125h-3.7zm0 0M3.172 11.7h3.7v2.124h-3.7zm0 0M3.172 14.887h3.7v2.129h-3.7zm0 0M3.172 18.078h3.7v2.129h-3.7zm0 0"
        fillRule="evenodd"
        fill="#e1d16d"
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
