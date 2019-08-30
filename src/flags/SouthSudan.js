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
        <clipPath id="SouthSudan_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip3">
          <path d="M 0 8 L 37 8 L 37 18 L 0 18 Z M 0 8 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip5">
          <path d="M 0 9 L 37 9 L 37 16 L 0 16 Z M 0 9 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip7">
          <path d="M 0 3 L 17 3 L 17 23 L 0 23 Z M 0 3 " />
        </clipPath>
        <clipPath id="SouthSudan_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SouthSudan_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#SouthSudan_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#SouthSudan_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthSudan_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#SouthSudan_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 0 8.507812 L 36.988281 8.507812 L 36.988281 17.015625 L 0 17.015625 Z M 0 8.507812 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthSudan_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#SouthSudan_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 9.570312 L 36.988281 9.570312 L 36.988281 15.953125 L 0 15.953125 Z M 0 9.570312 "
            />
          </g>
        </g>
        <g clipPath="url(#SouthSudan_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#SouthSudan_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M -0.53125 13.027344 L -0.460938 3.1875 L 16.914062 13.027344 L -0.460938 22.867188 Z M -0.53125 13.027344 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 4.628906 15.738281 C 4.414062 16.027344 4.21875 15.96875 4.191406 15.605469 L 4.09375 14.253906 C 4.070312 13.890625 3.777344 13.476562 3.449219 13.332031 L 2.292969 12.824219 C 1.964844 12.679688 1.972656 12.46875 2.308594 12.351562 L 3.5625 11.910156 C 3.898438 11.792969 4.164062 11.398438 4.15625 11.035156 L 4.121094 9.539062 C 4.109375 9.175781 4.28125 9.113281 4.5 9.402344 L 5.402344 10.605469 C 5.621094 10.894531 6.078125 11.046875 6.417969 10.941406 L 7.714844 10.542969 C 8.054688 10.4375 8.183594 10.605469 7.996094 10.914062 L 7.292969 12.101562 C 7.105469 12.410156 7.121094 12.914062 7.320312 13.214844 L 7.984375 14.21875 C 8.183594 14.523438 8.0625 14.699219 7.714844 14.609375 L 6.460938 14.285156 C 6.113281 14.195312 5.65625 14.359375 5.441406 14.648438 Z M 4.628906 15.738281 "
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
