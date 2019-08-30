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
        <clipPath id="Nauru_svg_clip1">
          <path d="M 0 12 L 37 12 L 37 14 L 0 14 Z M 0 12 " />
        </clipPath>
        <clipPath id="Nauru_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Nauru_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Nauru_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Nauru_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 0 12.230469 L 36.988281 12.230469 L 36.988281 13.824219 L 0 13.824219 Z M 0 12.230469 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 7.21875 17.0625 L 7.613281 15.6875 C 7.714844 15.335938 7.894531 15.332031 8.011719 15.675781 L 8.425781 16.855469 L 9.292969 16.179688 C 9.570312 15.964844 9.75 16.074219 9.695312 16.425781 L 9.488281 17.722656 L 10.699219 17.734375 C 11.050781 17.738281 11.121094 17.9375 10.855469 18.175781 L 10.058594 18.894531 L 10.902344 19.492188 C 11.199219 19.703125 11.15625 19.910156 10.800781 19.945312 L 9.519531 20.082031 L 9.535156 20.160156 L 9.859375 21.316406 C 9.957031 21.667969 9.792969 21.796875 9.492188 21.605469 L 8.632812 21.058594 L 8.359375 22.070312 C 8.269531 22.410156 8.066406 22.421875 7.90625 22.09375 L 7.347656 20.945312 L 7.339844 20.953125 L 6.25 21.746094 C 5.960938 21.957031 5.792969 21.839844 5.878906 21.484375 L 6.171875 20.238281 L 5.117188 20.179688 C 4.761719 20.160156 4.6875 19.960938 4.953125 19.734375 L 5.785156 19.035156 L 4.917969 18.261719 C 4.648438 18.027344 4.71875 17.824219 5.070312 17.8125 L 6.140625 17.785156 L 5.589844 16.496094 C 5.449219 16.164062 5.585938 16.046875 5.894531 16.242188 L 7.175781 17.039062 Z M 7.21875 17.0625 "
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
