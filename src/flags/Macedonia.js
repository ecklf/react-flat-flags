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
        <clipPath id="Macedonia_svg_clip1">
          <path d="M 0 0 L 15 0 L 15 10 L 0 10 Z M 0 0 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip3">
          <path d="M 22 0 L 37 0 L 37 10 L 22 10 Z M 22 0 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip5">
          <path d="M 0 16 L 15 16 L 15 25 L 0 25 Z M 0 16 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip7">
          <path d="M 22 16 L 37 16 L 37 25 L 22 25 Z M 22 16 " />
        </clipPath>
        <clipPath id="Macedonia_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Macedonia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Macedonia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Macedonia_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -0.871094 3.234375 L 1.769531 -1.902344 L 14.53125 7.71875 L 13.476562 9.03125 Z M -0.871094 3.234375 "
            />
          </g>
        </g>
        <g clipPath="url(#Macedonia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Macedonia_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 38.042969 3.125 L 35.414062 -2.121094 L 22.722656 7.707031 L 23.773438 9.046875 Z M 38.042969 3.125 "
            />
          </g>
        </g>
        <g clipPath="url(#Macedonia_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Macedonia_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -1.054688 22.289062 L 1.601562 27.425781 L 14.421875 17.804688 L 13.359375 16.492188 Z M -1.054688 22.289062 "
            />
          </g>
        </g>
        <g clipPath="url(#Macedonia_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Macedonia_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 38.042969 22.398438 L 35.402344 27.644531 L 22.652344 17.816406 L 23.707031 16.476562 Z M 38.042969 22.398438 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 18.757812 8.261719 C 21.082031 8.261719 22.964844 10.160156 22.964844 12.496094 C 22.964844 14.832031 21.082031 16.726562 18.757812 16.726562 C 16.4375 16.726562 14.554688 14.832031 14.554688 12.496094 C 14.554688 10.160156 16.4375 8.261719 18.757812 8.261719 Z M 18.757812 8.261719 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 15.851562 0 L 21.136719 0 L 19.550781 6.914062 L 17.4375 6.914062 Z M 15.851562 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 15.851562 24.992188 L 21.136719 24.992188 L 19.550781 18.078125 L 17.4375 18.078125 Z M 15.851562 24.992188 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 36.988281 15.421875 L 36.988281 10.101562 L 24.308594 11.699219 L 24.308594 13.824219 Z M 36.988281 15.421875 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 0 15.421875 L 0 10.101562 L 13.210938 11.699219 L 13.210938 13.824219 Z M 0 15.421875 "
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
