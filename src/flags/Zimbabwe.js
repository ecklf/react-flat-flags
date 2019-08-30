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
        <clipPath id="Zimbabwe_svg_clip1">
          <path d="M 0 4 L 37 4 L 37 8 L 0 8 Z M 0 4 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip3">
          <path d="M 0 17 L 37 17 L 37 21 L 0 21 Z M 0 17 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip5">
          <path d="M 0 7 L 37 7 L 37 11 L 0 11 Z M 0 7 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip7">
          <path d="M 0 13 L 37 13 L 37 18 L 0 18 Z M 0 13 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip9">
          <path d="M 0 10 L 37 10 L 37 14 L 0 14 Z M 0 10 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip11">
          <path d="M 0 0 L 15 0 L 15 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Zimbabwe_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Zimbabwe_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(31.764706%,75.686275%,38.039216%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Zimbabwe_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,73.333333%,25.490196%)",
                fillOpacity: 1,
              }}
              d="M 0 4.253906 L 36.988281 4.253906 L 36.988281 7.445312 L 0 7.445312 Z M 0 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Zimbabwe_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,73.333333%,25.490196%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 20.207031 L 0 20.207031 Z M 0 17.015625 "
            />
          </g>
        </g>
        <g clipPath="url(#Zimbabwe_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 7.445312 L 36.988281 7.445312 L 36.988281 10.632812 L 0 10.632812 Z M 0 7.445312 "
            />
          </g>
        </g>
        <g clipPath="url(#Zimbabwe_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 13.824219 L 36.988281 13.824219 L 36.988281 17.015625 L 0 17.015625 Z M 0 13.824219 "
            />
          </g>
        </g>
        <g clipPath="url(#Zimbabwe_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 10.632812 L 36.988281 10.632812 L 36.988281 13.824219 L 0 13.824219 Z M 0 10.632812 "
            />
          </g>
        </g>
        <g clipPath="url(#Zimbabwe_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#Zimbabwe_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.527344 0 L 14.796875 12.761719 L -0.527344 24.992188 Z M -0.527344 0 "
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
          d="M 2.121094 11.632812 L 3.21875 9.957031 C 3.355469 9.746094 3.652344 9.578125 3.882812 9.578125 L 6.515625 9.578125 L 7.390625 14.898438 L 3.339844 14.898438 L 3.875 11.632812 Z M 2.121094 11.632812 "
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
