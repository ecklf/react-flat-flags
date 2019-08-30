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
        <clipPath id="Zambia_svg_clip1">
          <path d="M 31 10 L 37 10 L 37 25 L 31 25 Z M 31 10 " />
        </clipPath>
        <clipPath id="Zambia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zambia_svg_clip3">
          <path d="M 26 10 L 32 10 L 32 25 L 26 25 Z M 26 10 " />
        </clipPath>
        <clipPath id="Zambia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zambia_svg_clip5">
          <path d="M 21 10 L 27 10 L 27 25 L 21 25 Z M 21 10 " />
        </clipPath>
        <clipPath id="Zambia_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Zambia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(31.764706%,75.686275%,38.039216%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Zambia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Zambia_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 31.707031 10.632812 L 36.988281 10.632812 L 36.988281 24.992188 L 31.707031 24.992188 Z M 31.707031 10.632812 "
            />
          </g>
        </g>
        <g clipPath="url(#Zambia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Zambia_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 26.421875 10.632812 L 31.707031 10.632812 L 31.707031 24.992188 L 26.421875 24.992188 Z M 26.421875 10.632812 "
            />
          </g>
        </g>
        <g clipPath="url(#Zambia_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Zambia_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 21.136719 10.632812 L 26.421875 10.632812 L 26.421875 24.992188 L 21.136719 24.992188 Z M 21.136719 10.632812 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 25.375 4.722656 L 26.46875 3.042969 C 26.605469 2.835938 26.90625 2.664062 27.132812 2.664062 L 29.765625 2.664062 L 30.640625 7.984375 L 26.59375 7.984375 L 27.125 4.722656 Z M 25.375 4.722656 "
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
