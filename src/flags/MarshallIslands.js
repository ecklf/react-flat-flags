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
        <clipPath id="MarshallIslands_svg_clip1">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="MarshallIslands_svg_clip2">
          <path d="M 0 4 L 37 4 L 37 25 L 0 25 Z M 0 4 " />
        </clipPath>
        <clipPath id="MarshallIslands_svg_clip3">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="MarshallIslands_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#MarshallIslands_svg_clip1)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(96.078431%,83.529412%,37.254902%)",
              fillOpacity: 1,
            }}
            d="M 0.0078125 24.835938 L 38.449219 0 L 38.445312 4.621094 L 0.0078125 25.523438 Z M 0.0078125 24.835938 "
          />
        </g>
        <g clipPath="url(#MarshallIslands_svg_clip2)" clipRule="nonzero">
          <g clipPath="url(#MarshallIslands_svg_clip3)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 1.472656 25.417969 L 38.574219 9.425781 L 38.566406 4.351562 L 0.128906 25.421875 Z M 1.472656 25.417969 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 8.765625 2.972656 L 8.546875 6.492188 L 7.609375 4.25 L 7.96875 6.636719 L 6.519531 4.707031 L 7.472656 6.910156 L 5.566406 5.449219 L 7.046875 7.285156 L 4.894531 6.339844 L 6.78125 7.75 L 4.433594 7.445312 L 6.652344 8.3125 L 3.171875 8.628906 L 6.660156 8.859375 L 4.449219 9.753906 L 6.773438 9.445312 L 4.894531 10.816406 L 7.074219 9.871094 L 5.585938 11.71875 L 7.480469 10.304688 L 6.542969 12.457031 L 8.058594 10.585938 L 7.648438 12.917969 L 8.601562 10.738281 L 8.816406 14.183594 L 9.152344 10.746094 L 9.972656 12.941406 L 9.660156 10.578125 L 11.167969 12.449219 L 10.175781 10.261719 L 12.070312 11.769531 L 10.566406 9.886719 L 12.8125 10.8125 L 10.824219 9.375 L 13.246094 9.78125 L 10.925781 8.902344 L 14.535156 8.679688 L 10.925781 8.347656 L 13.300781 7.566406 L 10.839844 7.871094 L 12.875 6.46875 L 10.582031 7.378906 L 12.164062 5.484375 L 10.238281 6.96875 L 11.164062 4.695312 L 9.667969 6.628906 L 9.988281 4.21875 L 9.101562 6.492188 Z M 8.765625 2.972656 "
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
