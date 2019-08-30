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
        fill="#f5f7f9"
      />
      <path
        d="M24.824 11.45c.11.722-.578-1.505-2.539-1.88-1.96-.379-3.86.887-4.242 2.825-.34 1.73-2.04 2.863-3.797 2.527-1.754-.336-2.902-2.016-2.562-3.75.703-3.567 4.203-5.899 7.82-5.203a6.618 6.618 0 015.32 5.48zm0 0"
        fill="#ed5565"
      />
      <path
        d="M16.957 19.023c-2.844-.546-4.914-2.804-5.32-5.48-.11-.723.578 1.504 2.539 1.879 1.96.375 3.86-.887 4.242-2.824.34-1.735 2.039-2.864 3.797-2.528 1.754.336 2.902 2.016 2.562 3.75-.703 3.567-4.203 5.899-7.82 5.203zm0 0"
        fill="#4757a9"
      />
      <path
        d="M25.504 4.36l3.016 5.613-.93.504-3.016-5.614zm0 0M27.363 3.348L30.38 8.96l-.93.504-3.015-5.613zm0 0M11.219 4.176l-3.016 5.43.93.492 3.015-5.434zm0 0M9.36 3.2L6.343 8.628l.93.488 3.015-5.43zm0 0M25.715 20.61l3.05-5.731-.94-.516-3.048 5.73zm0 0M27.594 21.64l3.05-5.726-.94-.516-3.048 5.727zm0 0M11.273 20.797l-3.05-5.543.941-.5 3.05 5.543zm0 0M9.395 21.793l-3.051-5.54.941-.5 3.05 5.54zm0 0"
        fillRule="evenodd"
        fill="#434953"
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
