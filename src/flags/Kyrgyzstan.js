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
      <g fillRule="evenodd">
        <path
          d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
          fill="#ed5565"
        />
        <path
          d="M18.758 8.262c2.324 0 4.207 1.898 4.207 4.234 0 2.336-1.883 4.23-4.207 4.23-2.32 0-4.203-1.894-4.203-4.23 0-2.336 1.883-4.234 4.203-4.234zm0 0M11.676 11.383c.61 0 1.105.496 1.105 1.113 0 .613-.496 1.113-1.105 1.113-.614 0-1.106-.5-1.106-1.113 0-.617.492-1.113 1.106-1.113zm0 0M25.844 11.383c.61 0 1.105.496 1.105 1.113 0 .613-.496 1.113-1.105 1.113-.614 0-1.11-.5-1.11-1.113a1.11 1.11 0 011.11-1.113zm0 0M17.652 19.625c0-.617.496-1.113 1.106-1.113.613 0 1.11.496 1.11 1.113 0 .613-.497 1.113-1.11 1.113-.61 0-1.106-.5-1.106-1.113zm0 0M17.652 5.367c0-.613.496-1.113 1.106-1.113.613 0 1.11.5 1.11 1.113a1.11 1.11 0 01-1.11 1.113c-.61 0-1.106-.496-1.106-1.113zm0 0M12.969 16.75a1.094 1.094 0 011.562 0c.434.434.434 1.14 0 1.574a1.101 1.101 0 01-1.562 0 1.115 1.115 0 010-1.574zm0 0M22.984 6.668a1.106 1.106 0 011.567 0c.433.434.433 1.14 0 1.574a1.099 1.099 0 01-1.567 0 1.122 1.122 0 010-1.574zm0 0M24.41 16.57a1.122 1.122 0 00-1.586 0 1.136 1.136 0 000 1.598 1.122 1.122 0 001.586 0 1.136 1.136 0 000-1.598zm0 0M14.266 6.367a1.115 1.115 0 00-1.586 0 1.132 1.132 0 000 1.594 1.115 1.115 0 001.586 0 1.132 1.132 0 000-1.594zm0 0"
          fill="#ffcd53"
        />
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
