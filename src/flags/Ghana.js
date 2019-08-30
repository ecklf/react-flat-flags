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
        <clipPath id="Ghana_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Ghana_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Ghana_svg_clip3">
          <path d="M 0 16 L 37 16 L 37 25 L 0 25 Z M 0 16 " />
        </clipPath>
        <clipPath id="Ghana_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Ghana_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Ghana_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Ghana_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Ghana_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Ghana_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 16.484375 L 36.988281 16.484375 L 36.988281 24.992188 L 0 24.992188 Z M 0 16.484375 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 16.710938 15.324219 C 16.445312 15.515625 16.289062 15.410156 16.367188 15.085938 L 16.652344 13.890625 C 16.730469 13.570312 16.589844 13.128906 16.34375 12.914062 L 15.472656 12.15625 C 15.226562 11.941406 15.289062 11.757812 15.617188 11.75 L 16.835938 11.714844 C 17.160156 11.703125 17.503906 11.4375 17.597656 11.121094 L 17.976562 9.8125 C 18.070312 9.496094 18.238281 9.492188 18.347656 9.800781 L 18.804688 11.089844 C 18.917969 11.402344 19.273438 11.660156 19.601562 11.664062 L 20.84375 11.675781 C 21.167969 11.679688 21.234375 11.859375 20.988281 12.078125 L 20.042969 12.910156 C 19.796875 13.125 19.667969 13.5625 19.761719 13.882812 L 20.0625 14.933594 C 20.152344 15.253906 20 15.371094 19.722656 15.199219 L 18.714844 14.570312 C 18.433594 14.398438 17.988281 14.414062 17.722656 14.601562 Z M 16.710938 15.324219 "
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
