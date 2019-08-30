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
        <clipPath id="Tonga_svg_clip1">
          <path d="M 0 0 L 17 0 L 17 13 L 0 13 Z M 0 0 " />
        </clipPath>
        <clipPath id="Tonga_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Tonga_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Tonga_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Tonga_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 16.382812 0 L 16.382812 12.761719 L 0 12.761719 Z M 0 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 7.925781 2.660156 L 8.453125 2.660156 C 9.039062 2.660156 9.511719 3.136719 9.511719 3.722656 L 9.511719 8.507812 C 9.511719 9.09375 9.039062 9.570312 8.453125 9.570312 L 7.925781 9.570312 C 7.34375 9.570312 6.871094 9.09375 6.871094 8.507812 L 6.871094 3.722656 C 6.871094 3.136719 7.34375 2.660156 7.925781 2.660156 Z M 7.925781 2.660156 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 4.753906 6.378906 L 4.753906 5.847656 C 4.753906 5.261719 5.230469 4.785156 5.8125 4.785156 L 10.570312 4.785156 C 11.152344 4.785156 11.625 5.261719 11.625 5.847656 L 11.625 6.378906 C 11.625 6.96875 11.152344 7.445312 10.570312 7.445312 L 5.8125 7.445312 C 5.230469 7.445312 4.753906 6.96875 4.753906 6.378906 Z M 4.753906 6.378906 "
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
