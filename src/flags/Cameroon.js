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
        <clipPath id="Cameroon_svg_clip1">
          <path d="M 0 0 L 11 0 L 11 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Cameroon_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Cameroon_svg_clip3">
          <path d="M 26 0 L 37 0 L 37 25 L 26 25 Z M 26 0 " />
        </clipPath>
        <clipPath id="Cameroon_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Cameroon_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Cameroon_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Cameroon_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 10.570312 0 L 10.570312 24.992188 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Cameroon_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Cameroon_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 26.421875 0 L 36.988281 0 L 36.988281 24.992188 L 26.421875 24.992188 Z M 26.421875 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,73.333333%,25.490196%)",
            fillOpacity: 1,
          }}
          d="M 16.453125 15.839844 C 16.140625 16.066406 15.957031 15.9375 16.046875 15.558594 L 16.386719 14.144531 C 16.476562 13.765625 16.3125 13.246094 16.023438 12.992188 L 14.996094 12.09375 C 14.707031 11.839844 14.78125 11.625 15.164062 11.613281 L 16.597656 11.570312 C 16.984375 11.5625 17.386719 11.246094 17.496094 10.871094 L 17.945312 9.324219 C 18.054688 8.949219 18.25 8.945312 18.378906 9.3125 L 18.921875 10.835938 C 19.050781 11.203125 19.472656 11.507812 19.855469 11.511719 L 21.316406 11.527344 C 21.703125 11.53125 21.777344 11.742188 21.488281 12 L 20.375 12.984375 C 20.085938 13.242188 19.9375 13.757812 20.042969 14.132812 L 20.398438 15.378906 C 20.507812 15.753906 20.328125 15.894531 20 15.6875 L 18.8125 14.949219 C 18.484375 14.742188 17.957031 14.761719 17.644531 14.984375 Z M 16.453125 15.839844 "
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
