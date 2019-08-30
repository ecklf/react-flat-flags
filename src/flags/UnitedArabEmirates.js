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
        <clipPath id="UnitedArabEmirates_svg_clip1">
          <path d="M 0 0 L 10 0 L 10 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip3">
          <path d="M 9 0 L 37 0 L 37 9 L 9 9 Z M 9 0 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip5">
          <path d="M 9 8 L 37 8 L 37 18 L 9 18 Z M 9 8 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip7">
          <path d="M 9 17 L 37 17 L 37 25 L 9 25 Z M 9 17 " />
        </clipPath>
        <clipPath id="UnitedArabEmirates_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="UnitedArabEmirates_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#UnitedArabEmirates_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#UnitedArabEmirates_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 9.511719 0 L 9.511719 24.992188 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedArabEmirates_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#UnitedArabEmirates_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(32.156863%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 9.511719 0 L 37.519531 0 L 37.519531 8.507812 L 9.511719 8.507812 Z M 9.511719 0 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedArabEmirates_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#UnitedArabEmirates_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 9.511719 8.507812 L 37.519531 8.507812 L 37.519531 17.015625 L 9.511719 17.015625 Z M 9.511719 8.507812 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedArabEmirates_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#UnitedArabEmirates_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 9.511719 17.015625 L 37.519531 17.015625 L 37.519531 25.523438 L 9.511719 25.523438 Z M 9.511719 17.015625 "
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
