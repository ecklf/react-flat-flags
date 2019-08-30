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
        <clipPath id="Djibouti_svg_clip1">
          <path d="M 0 12 L 37 12 L 37 25 L 0 25 Z M 0 12 " />
        </clipPath>
        <clipPath id="Djibouti_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Djibouti_svg_clip3">
          <path d="M 0 0 L 14 0 L 14 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Djibouti_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Djibouti_svg_clip5">
          <path d="M 2 10 L 8 10 L 8 15 L 2 15 Z M 2 10 " />
        </clipPath>
        <clipPath id="Djibouti_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Djibouti_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(54.509804%,72.54902%,88.235294%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Djibouti_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Djibouti_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 12.761719 L 36.988281 12.761719 L 36.988281 24.992188 L 0 24.992188 Z M 0 12.761719 "
            />
          </g>
        </g>
        <g clipPath="url(#Djibouti_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Djibouti_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 13.210938 12.761719 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Djibouti_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Djibouti_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 3.777344 14.8125 C 3.558594 14.964844 3.433594 14.878906 3.496094 14.617188 L 3.730469 13.636719 C 3.792969 13.375 3.679688 13.015625 3.476562 12.839844 L 2.765625 12.21875 C 2.5625 12.042969 2.617188 11.890625 2.882812 11.882812 L 3.878906 11.855469 C 4.144531 11.847656 4.425781 11.628906 4.5 11.371094 L 4.8125 10.300781 C 4.890625 10.042969 5.023438 10.039062 5.117188 10.292969 L 5.492188 11.347656 C 5.582031 11.601562 5.875 11.8125 6.140625 11.816406 L 7.15625 11.824219 C 7.421875 11.828125 7.476562 11.976562 7.277344 12.152344 L 6.503906 12.835938 C 6.300781 13.011719 6.195312 13.371094 6.273438 13.628906 L 6.519531 14.492188 C 6.59375 14.75 6.46875 14.847656 6.242188 14.707031 L 5.414062 14.195312 C 5.1875 14.050781 4.824219 14.0625 4.605469 14.21875 Z M 3.777344 14.8125 "
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
