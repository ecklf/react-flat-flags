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
        <clipPath id="Chile_svg_clip1">
          <path d="M 0 0 L 15 0 L 15 12 L 0 12 Z M 0 0 " />
        </clipPath>
        <clipPath id="Chile_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Chile_svg_clip3">
          <path d="M 4 3 L 10 3 L 10 8 L 4 8 Z M 4 3 " />
        </clipPath>
        <clipPath id="Chile_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Chile_svg_clip5">
          <path d="M 0 11 L 37 11 L 37 25 L 0 25 Z M 0 11 " />
        </clipPath>
        <clipPath id="Chile_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Chile_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Chile_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Chile_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 14.265625 0 L 14.265625 11.167969 L 0 11.167969 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Chile_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Chile_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 5.890625 7.898438 C 5.671875 8.054688 5.546875 7.964844 5.609375 7.703125 L 5.84375 6.722656 C 5.90625 6.460938 5.792969 6.101562 5.589844 5.925781 L 4.878906 5.304688 C 4.675781 5.128906 4.730469 4.980469 4.996094 4.972656 L 5.992188 4.945312 C 6.257812 4.9375 6.539062 4.71875 6.613281 4.457031 L 6.925781 3.386719 C 7.003906 3.128906 7.140625 3.125 7.230469 3.378906 L 7.605469 4.433594 C 7.695312 4.6875 7.988281 4.898438 8.253906 4.902344 L 9.269531 4.914062 C 9.539062 4.914062 9.589844 5.0625 9.390625 5.238281 L 8.617188 5.921875 C 8.414062 6.097656 8.3125 6.457031 8.386719 6.71875 L 8.632812 7.578125 C 8.707031 7.839844 8.582031 7.933594 8.355469 7.792969 L 7.527344 7.28125 C 7.300781 7.140625 6.9375 7.152344 6.71875 7.308594 Z M 5.890625 7.898438 "
            />
          </g>
        </g>
        <g clipPath="url(#Chile_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Chile_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 11.167969 L 36.988281 11.167969 L 36.988281 24.992188 L 0 24.992188 Z M 0 11.167969 "
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
