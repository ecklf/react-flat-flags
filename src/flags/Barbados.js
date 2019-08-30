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
        <clipPath id="Barbados_svg_clip1">
          <path d="M 12 0 L 25 0 L 25 25 L 12 25 Z M 12 0 " />
        </clipPath>
        <clipPath id="Barbados_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Barbados_svg_clip3">
          <path d="M 14 7 L 24 7 L 24 18 L 14 18 Z M 14 7 " />
        </clipPath>
        <clipPath id="Barbados_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Barbados_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Barbados_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Barbados_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 12.683594 0 L 24.835938 0 L 24.835938 24.992188 L 12.683594 24.992188 Z M 12.683594 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Barbados_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Barbados_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 19.28125 17.546875 L 19.28125 15.03125 C 19.792969 15.066406 20.453125 15.191406 20.957031 15.308594 C 21.058594 13.105469 21.628906 10.667969 23.25 8.902344 C 22.140625 8.949219 21.277344 9.460938 20.597656 10.292969 C 20.8125 10.257812 21.070312 10.246094 21.292969 10.269531 C 20.691406 11.34375 20.320312 12.890625 20.1875 14.234375 C 19.941406 14.171875 19.527344 14.121094 19.28125 14.109375 L 19.28125 9.980469 C 19.519531 10 19.808594 10.078125 20.054688 10.195312 C 19.589844 9.378906 19.128906 8.457031 18.757812 7.445312 C 18.390625 8.457031 17.929688 9.378906 17.464844 10.195312 C 17.710938 10.078125 17.996094 10 18.238281 9.980469 L 18.238281 14.109375 C 17.988281 14.121094 17.574219 14.171875 17.332031 14.234375 C 17.199219 12.890625 16.828125 11.34375 16.222656 10.269531 C 16.445312 10.246094 16.707031 10.257812 16.921875 10.292969 C 16.242188 9.460938 15.375 8.949219 14.269531 8.902344 C 15.886719 10.667969 16.457031 13.105469 16.558594 15.308594 C 17.0625 15.191406 17.726562 15.066406 18.238281 15.03125 L 18.238281 17.546875 Z M 19.28125 17.546875 "
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
