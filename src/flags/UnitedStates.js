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
        <clipPath id="UnitedStates_svg_clip1">
          <path d="M 0 10 L 37 10 L 37 16 L 0 16 Z M 0 10 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip3">
          <path d="M 0 19 L 37 19 L 37 25 L 0 25 Z M 0 19 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip5">
          <path d="M 0 0 L 37 0 L 37 6 L 0 6 Z M 0 0 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip7">
          <path d="M 0 0 L 16 0 L 16 16 L 0 16 Z M 0 0 " />
        </clipPath>
        <clipPath id="UnitedStates_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="UnitedStates_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#UnitedStates_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#UnitedStates_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 10.097656 L 36.988281 10.097656 L 36.988281 15.421875 L 0 15.421875 Z M 0 10.097656 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedStates_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#UnitedStates_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 19.671875 L 36.988281 19.671875 L 36.988281 24.992188 L 0 24.992188 Z M 0 19.671875 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedStates_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#UnitedStates_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 -0.00390625 L 36.988281 -0.00390625 L 36.988281 5.320312 L 0 5.320312 Z M 0 -0.00390625 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedStates_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#UnitedStates_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 15.851562 0 L 15.851562 15.421875 L 0 15.421875 Z M 0 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 5.84375 12.082031 C 5.429688 12.378906 5.191406 12.210938 5.3125 11.714844 L 5.753906 9.867188 C 5.875 9.367188 5.660156 8.691406 5.277344 8.355469 L 3.933594 7.1875 C 3.550781 6.855469 3.648438 6.570312 4.152344 6.554688 L 6.035156 6.5 C 6.539062 6.488281 7.066406 6.074219 7.210938 5.585938 L 7.800781 3.5625 C 7.941406 3.074219 8.199219 3.066406 8.371094 3.546875 L 9.082031 5.539062 C 9.25 6.019531 9.804688 6.417969 10.308594 6.421875 L 12.226562 6.441406 C 12.730469 6.449219 12.832031 6.726562 12.449219 7.0625 L 10.992188 8.351562 C 10.609375 8.683594 10.414062 9.359375 10.554688 9.851562 L 11.019531 11.480469 C 11.160156 11.96875 10.925781 12.152344 10.496094 11.886719 L 8.9375 10.917969 C 8.507812 10.648438 7.816406 10.671875 7.40625 10.964844 Z M 5.84375 12.082031 "
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
