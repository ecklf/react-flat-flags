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
        <clipPath id="Togo_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 7 L 0 7 Z M 0 0 " />
        </clipPath>
        <clipPath id="Togo_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Togo_svg_clip3">
          <path d="M 0 0 L 15 0 L 15 13 L 0 13 Z M 0 0 " />
        </clipPath>
        <clipPath id="Togo_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Togo_svg_clip5">
          <path d="M 2 1 L 12 1 L 12 11 L 2 11 Z M 2 1 " />
        </clipPath>
        <clipPath id="Togo_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Togo_svg_clip7">
          <path d="M 0 12 L 37 12 L 37 20 L 0 20 Z M 0 12 " />
        </clipPath>
        <clipPath id="Togo_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Togo_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Togo_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Togo_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 6.378906 L 0 6.378906 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Togo_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Togo_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 14.265625 0 L 14.265625 12.761719 L 0 12.761719 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Togo_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Togo_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 4.835938 10.082031 C 4.445312 10.339844 4.226562 10.183594 4.351562 9.726562 L 4.8125 8.035156 C 4.9375 7.582031 4.753906 6.949219 4.410156 6.632812 L 3.191406 5.519531 C 2.84375 5.199219 2.945312 4.941406 3.410156 4.941406 L 5.160156 4.941406 C 5.628906 4.945312 6.132812 4.578125 6.277344 4.128906 L 6.878906 2.285156 C 7.027344 1.835938 7.265625 1.835938 7.410156 2.285156 L 8.015625 4.140625 C 8.164062 4.585938 8.667969 4.96875 9.132812 4.988281 L 10.917969 5.054688 C 11.386719 5.074219 11.472656 5.332031 11.109375 5.632812 L 9.71875 6.78125 C 9.355469 7.078125 9.15625 7.695312 9.273438 8.152344 L 9.664062 9.664062 C 9.78125 10.121094 9.558594 10.28125 9.164062 10.023438 L 7.742188 9.089844 C 7.351562 8.832031 6.710938 8.835938 6.320312 9.09375 Z M 4.835938 10.082031 "
            />
          </g>
        </g>
        <g clipPath="url(#Togo_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Togo_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 12.761719 L 36.988281 12.761719 L 36.988281 19.140625 L 0 19.140625 Z M 0 12.761719 "
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
