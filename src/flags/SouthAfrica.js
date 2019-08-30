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
        <clipPath id="SouthAfrica_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 11 L 0 11 Z M 0 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip3">
          <path d="M 0 0 L 27 0 L 27 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip5">
          <path d="M 14 8 L 37 8 L 37 17 L 14 17 Z M 14 8 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip7">
          <path d="M 0 0 L 24 0 L 24 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip9">
          <path d="M 14 9 L 37 9 L 37 16 L 14 16 Z M 14 9 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip11">
          <path d="M 0 4 L 16 4 L 16 22 L 0 22 Z M 0 4 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip13">
          <path d="M 0 5 L 13 5 L 13 21 L 0 21 Z M 0 5 " />
        </clipPath>
        <clipPath id="SouthAfrica_svg_clip14">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SouthAfrica_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#SouthAfrica_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 10.632812 L 0 10.632812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M -3.179688 12.496094 L -3.058594 -4.261719 L 26.578125 12.496094 L -3.058594 29.253906 Z M -3.179688 12.496094 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 14.800781 8.515625 L 40.160156 8.515625 L 40.160156 16.476562 L 14.800781 16.476562 Z M 14.800781 8.515625 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M -2.121094 12.496094 L -2.015625 -2.132812 L 23.785156 12.496094 L -2.015625 27.125 Z M -2.121094 12.496094 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 14.796875 9.570312 L 36.988281 9.570312 L 36.988281 15.421875 L 14.796875 15.421875 Z M 14.796875 9.570312 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.00390625 13.027344 L 0.0585938 4.25 L 15.328125 13.027344 L 0.0585938 21.804688 Z M -0.00390625 13.027344 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthAfrica_svg_clip13)" clipRule="nonzero">
          <g clipPath="url(#SouthAfrica_svg_clip14)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.00390625 13.027344 L 0.046875 5.847656 L 12.683594 13.027344 L 0.046875 20.210938 Z M -0.00390625 13.027344 "
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
