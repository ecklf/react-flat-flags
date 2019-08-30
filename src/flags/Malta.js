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
        <clipPath id="Malta_svg_clip1">
          <path d="M 17 0 L 37 0 L 37 25 L 17 25 Z M 17 0 " />
        </clipPath>
        <clipPath id="Malta_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Malta_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Malta_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Malta_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 17.964844 0 L 36.988281 0 L 36.988281 24.992188 L 17.964844 24.992188 Z M 17.964844 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(79.607843%,81.960784%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 7.398438 3.722656 L 8.984375 3.722656 C 9.566406 3.722656 10.039062 4.199219 10.039062 4.785156 L 10.039062 12.761719 C 10.039062 13.347656 9.566406 13.824219 8.984375 13.824219 L 7.398438 13.824219 C 6.8125 13.824219 6.339844 13.347656 6.339844 12.761719 L 6.339844 4.785156 C 6.339844 4.199219 6.8125 3.722656 7.398438 3.722656 Z M 7.398438 3.722656 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(79.607843%,81.960784%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 3.171875 9.570312 L 3.171875 7.976562 C 3.171875 7.386719 3.644531 6.914062 4.226562 6.914062 L 12.152344 6.914062 C 12.738281 6.914062 13.210938 7.386719 13.210938 7.976562 L 13.210938 9.570312 C 13.210938 10.160156 12.738281 10.632812 12.152344 10.632812 L 4.226562 10.632812 C 3.644531 10.632812 3.171875 10.160156 3.171875 9.570312 Z M 3.171875 9.570312 "
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
