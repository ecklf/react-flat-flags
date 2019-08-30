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
      <g id="KoreaSouth_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 24.824219 11.449219 C 24.933594 12.171875 24.246094 9.945312 22.285156 9.570312 C 20.324219 9.191406 18.425781 10.457031 18.042969 12.394531 C 17.703125 14.125 16.003906 15.257812 14.246094 14.921875 C 12.492188 14.585938 11.34375 12.90625 11.683594 11.171875 C 12.386719 7.605469 15.886719 5.273438 19.503906 5.96875 C 22.347656 6.511719 24.414062 8.769531 24.824219 11.449219 Z M 24.824219 11.449219 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 16.957031 19.023438 C 14.113281 18.476562 12.042969 16.21875 11.636719 13.542969 C 11.527344 12.820312 12.214844 15.046875 14.175781 15.421875 C 16.136719 15.796875 18.035156 14.535156 18.417969 12.597656 C 18.757812 10.863281 20.457031 9.734375 22.214844 10.070312 C 23.96875 10.40625 25.117188 12.085938 24.777344 13.820312 C 24.074219 17.386719 20.574219 19.71875 16.957031 19.023438 Z M 16.957031 19.023438 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 25.503906 4.359375 L 28.519531 9.972656 L 27.589844 10.476562 L 24.574219 4.863281 Z M 25.503906 4.359375 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 27.363281 3.347656 L 30.378906 8.960938 L 29.449219 9.464844 L 26.433594 3.851562 Z M 27.363281 3.347656 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 11.21875 4.175781 L 8.203125 9.605469 L 9.132812 10.097656 L 12.148438 4.664062 Z M 11.21875 4.175781 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 9.359375 3.199219 L 6.34375 8.628906 L 7.273438 9.117188 L 10.289062 3.6875 Z M 9.359375 3.199219 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 25.714844 20.609375 L 28.765625 14.878906 L 27.824219 14.363281 L 24.777344 20.09375 Z M 25.714844 20.609375 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 27.59375 21.640625 L 30.644531 15.914062 L 29.703125 15.398438 L 26.65625 21.125 Z M 27.59375 21.640625 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 11.273438 20.796875 L 8.222656 15.253906 L 9.164062 14.753906 L 12.214844 20.296875 Z M 11.273438 20.796875 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 9.394531 21.792969 L 6.34375 16.253906 L 7.285156 15.753906 L 10.335938 21.292969 Z M 9.394531 21.792969 "
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
