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
        <clipPath id="Vanuatu_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 11 L 0 11 Z M 0 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip3">
          <path d="M 0 0 L 22 0 L 22 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip5">
          <path d="M 14 10 L 37 10 L 37 15 L 14 15 Z M 14 10 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip7">
          <path d="M 0 0 L 19 0 L 19 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip9">
          <path d="M 14 11 L 37 11 L 37 14 L 14 14 Z M 14 11 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip11">
          <path d="M 0 4 L 15 4 L 15 21 L 0 21 Z M 0 4 " />
        </clipPath>
        <clipPath id="Vanuatu_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Vanuatu_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Vanuatu_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip2)" clipRule="evenodd">
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
        <g clipPath="url(#Vanuatu_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -8.460938 12.496094 L -8.339844 -4.261719 L 21.292969 12.496094 L -8.339844 29.253906 Z M -8.460938 12.496094 "
            />
          </g>
        </g>
        <g clipPath="url(#Vanuatu_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 14.800781 10.109375 L 40.160156 10.109375 L 40.160156 14.882812 L 14.800781 14.882812 Z M 14.800781 10.109375 "
            />
          </g>
        </g>
        <g clipPath="url(#Vanuatu_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -7.40625 12.496094 L -7.300781 -2.132812 L 18.5 12.496094 L -7.300781 27.125 Z M -7.40625 12.496094 "
            />
          </g>
        </g>
        <g clipPath="url(#Vanuatu_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 14.796875 11.167969 L 36.988281 11.167969 L 36.988281 13.824219 L 14.796875 13.824219 Z M 14.796875 11.167969 "
            />
          </g>
        </g>
        <g clipPath="url(#Vanuatu_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#Vanuatu_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.00390625 12.496094 L 0.0546875 4.25 L 14.269531 12.496094 L 0.0546875 20.742188 Z M -0.00390625 12.496094 "
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
