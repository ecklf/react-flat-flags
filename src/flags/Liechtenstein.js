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
        <clipPath id="Liechtenstein_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 13 L 0 13 Z M 0 0 " />
        </clipPath>
        <clipPath id="Liechtenstein_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Liechtenstein_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Liechtenstein_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Liechtenstein_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 12.230469 L 0 12.230469 Z M 0 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,73.333333%,25.490196%)",
            fillOpacity: 1,
          }}
          d="M 11.078125 4.84375 C 10.765625 5.238281 10.253906 5.242188 9.9375 4.847656 L 9.03125 3.714844 C 8.714844 3.320312 8.199219 3.320312 7.886719 3.714844 L 6.984375 4.847656 C 6.671875 5.242188 6.15625 5.242188 5.839844 4.847656 L 4.722656 3.441406 C 4.40625 3.046875 4.1875 3.140625 4.234375 3.644531 L 4.644531 8.121094 C 4.691406 8.625 5.136719 9.039062 5.636719 9.039062 L 11.292969 9.039062 C 11.792969 9.039062 12.238281 8.625 12.285156 8.121094 L 12.675781 3.636719 C 12.71875 3.128906 12.5 3.039062 12.1875 3.4375 Z M 11.078125 4.84375 "
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
