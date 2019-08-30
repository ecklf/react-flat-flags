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
        <clipPath id="Ecuador_svg_clip1">
          <path d="M 0 14 L 37 14 L 37 20 L 0 20 Z M 0 14 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip3">
          <path d="M 0 19 L 37 19 L 37 25 L 0 25 Z M 0 19 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip5">
          <path d="M 13 4 L 25 4 L 25 21 L 13 21 Z M 13 4 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip7">
          <path d="M 14 6 L 24 6 L 24 20 L 14 20 Z M 14 6 " />
        </clipPath>
        <clipPath id="Ecuador_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Ecuador_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(94.509804%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Ecuador_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Ecuador_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 14.355469 L 36.988281 14.355469 L 36.988281 19.675781 L 0 19.675781 Z M 0 14.355469 "
            />
          </g>
        </g>
        <g clipPath="url(#Ecuador_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Ecuador_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 19.675781 L 36.988281 19.675781 L 36.988281 24.992188 L 0 24.992188 Z M 0 19.675781 "
            />
          </g>
        </g>
        <g clipPath="url(#Ecuador_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Ecuador_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 21.539062 6.234375 C 19.738281 6.234375 18.765625 4.785156 18.765625 4.785156 C 18.765625 4.785156 17.789062 6.234375 15.988281 6.234375 C 14.328125 6.234375 13.210938 5.03125 13.210938 5.03125 L 13.210938 12.890625 C 13.261719 18.066406 18.757812 20.207031 18.757812 20.207031 C 18.757812 20.207031 24.308594 18.066406 24.308594 12.890625 L 24.308594 5.03125 C 24.308594 5.03125 23.199219 6.234375 21.539062 6.234375 Z M 21.539062 6.234375 "
            />
          </g>
        </g>
        <g clipPath="url(#Ecuador_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Ecuador_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(94.509804%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 21.011719 7.578125 C 19.550781 7.578125 18.765625 6.378906 18.765625 6.378906 C 18.765625 6.378906 17.972656 7.578125 16.515625 7.578125 C 15.171875 7.578125 14.265625 6.582031 14.265625 6.582031 L 14.265625 13.089844 C 14.308594 17.371094 18.757812 19.140625 18.757812 19.140625 C 18.757812 19.140625 23.25 17.371094 23.25 13.089844 L 23.25 6.582031 C 23.25 6.582031 22.351562 7.578125 21.011719 7.578125 Z M 21.011719 7.578125 "
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
