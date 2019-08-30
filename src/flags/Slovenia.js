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
        <clipPath id="Slovenia_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip3">
          <path d="M 0 16 L 37 16 L 37 25 L 0 25 Z M 0 16 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip5">
          <path d="M 4 5 L 11 5 L 11 13 L 4 13 Z M 4 5 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip7">
          <path d="M 4 5 L 10 5 L 10 13 L 4 13 Z M 4 5 " />
        </clipPath>
        <clipPath id="Slovenia_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Slovenia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Slovenia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Slovenia_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovenia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Slovenia_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 16.484375 L 36.988281 16.484375 L 36.988281 24.992188 L 0 24.992188 Z M 0 16.484375 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovenia_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Slovenia_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 8.988281 6.015625 C 7.957031 6.015625 7.402344 5.316406 7.402344 5.316406 C 7.402344 5.316406 6.84375 6.015625 5.816406 6.015625 C 4.867188 6.015625 4.226562 5.4375 4.226562 5.4375 L 4.226562 9.230469 C 4.257812 11.730469 7.398438 12.761719 7.398438 12.761719 C 7.398438 12.761719 10.570312 11.730469 10.570312 9.230469 L 10.570312 5.4375 C 10.570312 5.4375 9.933594 6.015625 8.988281 6.015625 Z M 8.988281 6.015625 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovenia_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Slovenia_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 8.667969 6.519531 C 7.847656 6.519531 7.402344 5.9375 7.402344 5.9375 C 7.402344 5.9375 6.953125 6.519531 6.132812 6.519531 C 5.375 6.519531 4.863281 6.035156 4.863281 6.035156 L 4.863281 9.199219 C 4.882812 11.28125 7.398438 12.140625 7.398438 12.140625 C 7.398438 12.140625 9.933594 11.28125 9.933594 9.199219 L 9.933594 6.035156 C 9.933594 6.035156 9.425781 6.519531 8.667969 6.519531 Z M 8.667969 6.519531 "
            />
          </g>
        </g>
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
