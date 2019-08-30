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
        <clipPath id="EastTimor_svg_clip1">
          <path d="M 0 0 L 22 0 L 22 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="EastTimor_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="EastTimor_svg_clip3">
          <path d="M 0 0 L 16 0 L 16 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="EastTimor_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="EastTimor_svg_clip5">
          <path d="M 2 10 L 7 10 L 7 15 L 2 15 Z M 2 10 " />
        </clipPath>
        <clipPath id="EastTimor_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="EastTimor_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#EastTimor_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#EastTimor_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 21.136719 12.761719 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#EastTimor_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#EastTimor_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 15.324219 12.761719 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#EastTimor_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#EastTimor_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.164062 14.695312 C 5.121094 14.929688 4.984375 14.953125 4.859375 14.753906 L 4.390625 14 C 4.261719 13.796875 3.960938 13.644531 3.722656 13.664062 L 2.871094 13.726562 C 2.628906 13.746094 2.570312 13.621094 2.734375 13.449219 L 3.355469 12.804688 C 3.523438 12.632812 3.566406 12.320312 3.449219 12.113281 L 2.972656 11.257812 C 2.859375 11.050781 2.941406 10.960938 3.160156 11.0625 L 4.070312 11.480469 C 4.289062 11.578125 4.609375 11.527344 4.785156 11.359375 L 5.445312 10.730469 C 5.617188 10.5625 5.746094 10.621094 5.726562 10.855469 L 5.660156 11.765625 C 5.644531 12 5.804688 12.285156 6.015625 12.398438 L 6.722656 12.777344 C 6.933594 12.890625 6.914062 13.03125 6.679688 13.085938 L 5.824219 13.285156 C 5.589844 13.34375 5.363281 13.578125 5.320312 13.8125 Z M 5.164062 14.695312 "
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
