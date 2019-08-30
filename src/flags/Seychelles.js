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
        <clipPath id="Seychelles_svg_clip1">
          <path d="M 0 0 L 14 0 L 14 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip3">
          <path d="M 0 0 L 25 0 L 25 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip5">
          <path d="M 0 6 L 37 6 L 37 25 L 0 25 Z M 0 6 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip7">
          <path d="M 0 14 L 37 14 L 37 25 L 0 25 Z M 0 14 " />
        </clipPath>
        <clipPath id="Seychelles_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Seychelles_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Seychelles_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Seychelles_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M -0.46875 25.460938 L 13.082031 -0.53125 L -0.46875 -0.53125 Z M -0.46875 25.460938 "
            />
          </g>
        </g>
        <g clipPath="url(#Seychelles_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Seychelles_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.96875 25.460938 L 12.582031 -0.53125 L 24.683594 -0.53125 Z M -0.96875 25.460938 "
            />
          </g>
        </g>
        <g clipPath="url(#Seychelles_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Seychelles_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M -0.527344 25.523438 L 41.082031 6.242188 L 41.082031 15.972656 Z M -0.527344 25.523438 "
            />
          </g>
        </g>
        <g clipPath="url(#Seychelles_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Seychelles_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M -0.519531 24.992188 L 41.21875 24.992188 L 41.21875 14.894531 Z M -0.519531 24.992188 "
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
