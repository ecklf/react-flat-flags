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
      <g id="Switzerland_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 17.4375 6.378906 L 19.550781 6.378906 C 20.136719 6.378906 20.609375 6.855469 20.609375 7.445312 L 20.609375 18.078125 C 20.609375 18.667969 20.136719 19.140625 19.550781 19.140625 L 17.4375 19.140625 C 16.855469 19.140625 16.382812 18.667969 16.382812 18.078125 L 16.382812 7.445312 C 16.382812 6.855469 16.855469 6.378906 17.4375 6.378906 Z M 17.4375 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 12.152344 13.824219 L 12.152344 11.699219 C 12.152344 11.109375 12.625 10.632812 13.210938 10.632812 L 23.777344 10.632812 C 24.363281 10.632812 24.835938 11.109375 24.835938 11.699219 L 24.835938 13.824219 C 24.835938 14.414062 24.363281 14.886719 23.777344 14.886719 L 13.210938 14.886719 C 12.625 14.886719 12.152344 14.414062 12.152344 13.824219 Z M 12.152344 13.824219 "
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
