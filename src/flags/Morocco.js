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
        fill="#ed5565"
      />
      <path
        d="M15.73 17.906c-.484.348-.77.153-.628-.433l.523-2.176c.14-.586-.113-1.383-.563-1.774l-1.582-1.378c-.449-.391-.335-.727.258-.743l2.219-.062c.59-.016 1.215-.504 1.383-1.078l.695-2.38c.168-.577.469-.585.672-.019l.836 2.344c.2.566.852 1.035 1.445 1.04l2.258.023c.594.007.715.335.266.73l-1.719 1.512c-.45.394-.68 1.191-.516 1.77l.551 1.913c.164.578-.113.793-.621.48l-1.836-1.14c-.504-.316-1.316-.289-1.8.059zm0 0"
        fill="#57a763"
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
