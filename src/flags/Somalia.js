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
      <g id="Somalia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(28.627451%,53.72549%,85.882353%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 15.933594 16.460938 C 15.542969 16.722656 15.324219 16.5625 15.449219 16.109375 L 15.910156 14.417969 C 16.035156 13.960938 15.851562 13.332031 15.503906 13.011719 L 14.289062 11.898438 C 13.941406 11.582031 14.039062 11.324219 14.507812 11.324219 L 16.257812 11.324219 C 16.726562 11.324219 17.230469 10.957031 17.375 10.511719 L 17.976562 8.664062 C 18.121094 8.214844 18.363281 8.214844 18.507812 8.664062 L 19.113281 10.519531 C 19.261719 10.96875 19.761719 11.347656 20.230469 11.367188 L 22.015625 11.4375 C 22.484375 11.457031 22.570312 11.714844 22.207031 12.011719 L 20.816406 13.160156 C 20.453125 13.460938 20.253906 14.078125 20.371094 14.53125 L 20.761719 16.046875 C 20.878906 16.5 20.65625 16.664062 20.261719 16.40625 L 18.839844 15.46875 C 18.445312 15.214844 17.804688 15.214844 17.414062 15.476562 Z M 15.933594 16.460938 "
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
