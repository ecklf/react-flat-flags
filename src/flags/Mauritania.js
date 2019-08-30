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
          fill="#57a763"
        />
        <path
          d="M23.34 8.836a.19.19 0 00.012.027h-.004c.144.301.27.614.363.942.918 3.144-.871 6.418-3.992 7.308a5.866 5.866 0 01-1.805.223 5.926 5.926 0 01-1.8-.305c-3.094-1.035-4.798-4.39-3.798-7.492.106-.32.235-.629.387-.922l.012-.023a.209.209 0 00-.13-.258.2.2 0 00-.226.074 7.255 7.255 0 00-1.433 2.547c-1.258 3.895.879 8.105 4.77 9.402a7.328 7.328 0 004.355.102c3.922-1.117 6.168-5.227 5.015-9.176A7.525 7.525 0 0023.7 8.672a.198.198 0 00-.222-.082.194.194 0 00-.137.246zm-2.43.539c.2.309.074.48-.277.379l-1.317-.375c-.355-.102-.847.039-1.097.309l-.875.949c-.25.27-.45.187-.45-.18l.012-1.375c0-.367-.281-.766-.629-.883l-1.437-.484c-.348-.117-.348-.305.004-.418l1.449-.461c.348-.113.648-.504.664-.871l.063-1.399c.02-.367.222-.433.453-.148l.886 1.102c.23.285.711.449 1.067.359l1.183-.297c.356-.09.48.09.278.395l-.735 1.109c-.203.309-.207.812-.004 1.121zm0 0"
          fill="#f5d55f"
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
