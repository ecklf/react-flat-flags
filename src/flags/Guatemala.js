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
        <clipPath id="Guatemala_svg_clip1">
          <path d="M 12 0 L 25 0 L 25 25 L 12 25 Z M 12 0 " />
        </clipPath>
        <clipPath id="Guatemala_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Guatemala_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(54.509804%,72.54902%,88.235294%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Guatemala_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Guatemala_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 12.152344 0 L 24.835938 0 L 24.835938 24.992188 L 12.152344 24.992188 Z M 12.152344 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(31.764706%,75.686275%,38.039216%)",
            fillOpacity: 1,
          }}
          d="M 18.496094 10.101562 C 19.953125 10.101562 21.136719 11.292969 21.136719 12.761719 C 21.136719 14.230469 19.953125 15.421875 18.496094 15.421875 C 17.035156 15.421875 15.851562 14.230469 15.851562 12.761719 C 15.851562 11.292969 17.035156 10.101562 18.496094 10.101562 Z M 18.496094 10.101562 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 18.496094 10.632812 C 19.660156 10.632812 20.609375 11.585938 20.609375 12.761719 C 20.609375 13.9375 19.660156 14.886719 18.496094 14.886719 C 17.328125 14.886719 16.382812 13.9375 16.382812 12.761719 C 16.382812 11.585938 17.328125 10.632812 18.496094 10.632812 Z M 18.496094 10.632812 "
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
