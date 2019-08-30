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
        <clipPath id="Grecee_svg_clip1">
          <path d="M 0 5 L 37 5 L 37 10 L 0 10 Z M 0 5 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip3">
          <path d="M 0 0 L 37 0 L 37 4 L 0 4 Z M 0 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip5">
          <path d="M 0 11 L 37 11 L 37 15 L 0 15 Z M 0 11 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip7">
          <path d="M 0 17 L 37 17 L 37 21 L 0 21 Z M 0 17 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip9">
          <path d="M 0 22 L 37 22 L 37 25 L 0 25 Z M 0 22 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip11">
          <path d="M 0 0 L 15 0 L 15 15 L 0 15 Z M 0 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip13">
          <path d="M 5 0 L 9 0 L 9 15 L 5 15 Z M 5 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip14">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip15">
          <path d="M 0 5 L 15 5 L 15 10 L 0 10 Z M 0 5 " />
        </clipPath>
        <clipPath id="Grecee_svg_clip16">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Grecee_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Grecee_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 5.847656 L 36.988281 5.847656 L 36.988281 9.039062 L 0 9.039062 Z M 0 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 3.191406 L 0 3.191406 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 11.167969 L 36.988281 11.167969 L 36.988281 14.355469 L 0 14.355469 Z M 0 11.167969 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 20.207031 L 0 20.207031 Z M 0 17.015625 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 22.863281 L 36.988281 22.863281 L 36.988281 26.054688 L 0 26.054688 Z M 0 22.863281 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(28.627451%,53.72549%,85.882353%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 14.265625 0 L 14.265625 14.355469 L 0 14.355469 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip13)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip14)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 5.8125 0 L 8.984375 0 L 8.984375 14.355469 L 5.8125 14.355469 Z M 5.8125 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Grecee_svg_clip15)" clipRule="nonzero">
          <g clipPath="url(#Grecee_svg_clip16)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 0 5.847656 L 14.265625 5.847656 L 14.265625 9.039062 L 0 9.039062 Z M 0 5.847656 "
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
