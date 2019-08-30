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
        <clipPath id="Rwanda_svg_clip1">
          <path d="M 0 20 L 37 20 L 37 25 L 0 25 Z M 0 20 " />
        </clipPath>
        <clipPath id="Rwanda_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Rwanda_svg_clip3">
          <path d="M 29 4 L 34 4 L 34 9 L 29 9 Z M 29 4 " />
        </clipPath>
        <clipPath id="Rwanda_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Rwanda_svg_clip5">
          <path d="M 0 11 L 37 11 L 37 21 L 0 21 Z M 0 11 " />
        </clipPath>
        <clipPath id="Rwanda_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Rwanda_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Rwanda_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Rwanda_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 20.207031 L 36.988281 20.207031 L 36.988281 24.992188 L 0 24.992188 Z M 0 20.207031 "
            />
          </g>
        </g>
        <g clipPath="url(#Rwanda_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Rwanda_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 31.175781 4.253906 C 32.34375 4.253906 33.289062 5.207031 33.289062 6.378906 C 33.289062 7.554688 32.34375 8.507812 31.175781 8.507812 C 30.007812 8.507812 29.0625 7.554688 29.0625 6.378906 C 29.0625 5.207031 30.007812 4.253906 31.175781 4.253906 Z M 31.175781 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Rwanda_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Rwanda_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 11.699219 L 36.988281 11.699219 L 36.988281 20.207031 L 0 20.207031 Z M 0 11.699219 "
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
