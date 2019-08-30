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
        <clipPath id="BurkinaFaso_svg_clip1">
          <path d="M 0 12 L 37 12 L 37 25 L 0 25 Z M 0 12 " />
        </clipPath>
        <clipPath id="BurkinaFaso_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="BurkinaFaso_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#BurkinaFaso_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#BurkinaFaso_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 12.230469 L 36.988281 12.230469 L 36.988281 24.992188 L 0 24.992188 Z M 0 12.230469 "
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
          d="M 15.882812 16.867188 C 15.46875 17.164062 15.230469 16.996094 15.351562 16.5 L 15.792969 14.652344 C 15.914062 14.15625 15.699219 13.476562 15.316406 13.144531 L 13.972656 11.972656 C 13.589844 11.640625 13.6875 11.355469 14.191406 11.339844 L 16.074219 11.289062 C 16.578125 11.273438 17.105469 10.859375 17.25 10.371094 L 17.839844 8.347656 C 17.980469 7.859375 18.238281 7.851562 18.410156 8.332031 L 19.121094 10.324219 C 19.289062 10.804688 19.84375 11.203125 20.347656 11.210938 L 22.265625 11.230469 C 22.769531 11.234375 22.871094 11.511719 22.492188 11.847656 L 21.03125 13.136719 C 20.648438 13.46875 20.453125 14.148438 20.59375 14.636719 L 21.0625 16.265625 C 21.203125 16.753906 20.964844 16.9375 20.535156 16.671875 L 18.976562 15.703125 C 18.546875 15.433594 17.855469 15.457031 17.445312 15.753906 Z M 15.882812 16.867188 "
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
