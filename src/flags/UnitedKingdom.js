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
        <clipPath id="UnitedKingdom_svg_clip1">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip2">
          <path d="M 0 9 L 37 9 L 37 16 L 0 16 Z M 0 9 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip3">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip4">
          <path d="M 15 0 L 22 0 L 22 25 L 15 25 Z M 15 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip5">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip6">
          <path d="M 0 10 L 37 10 L 37 15 L 0 15 Z M 0 10 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip7">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip8">
          <path d="M 16 0 L 21 0 L 21 25 L 16 25 Z M 16 0 " />
        </clipPath>
        <clipPath id="UnitedKingdom_svg_clip9">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="UnitedKingdom_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#UnitedKingdom_svg_clip1)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(100%,100%,100%)",
              fillOpacity: 1,
            }}
            d="M -0.289062 26.433594 L -1.71875 24.199219 L 37.804688 -1.445312 L 39.238281 0.789062 Z M -0.289062 26.433594 "
          />
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(92.941176%,33.333333%,39.607843%)",
              fillOpacity: 1,
            }}
            d="M -0.527344 26.0625 L -1.480469 24.574219 L 38.042969 -1.070312 L 39 0.417969 Z M -0.527344 26.0625 "
          />
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(100%,100%,100%)",
              fillOpacity: 1,
            }}
            d="M 37.683594 26.585938 L 39.105469 24.367188 L -0.164062 -1.0625 L -1.585938 1.152344 Z M 37.683594 26.585938 "
          />
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(92.941176%,33.333333%,39.607843%)",
              fillOpacity: 1,
            }}
            d="M 37.921875 26.214844 L 38.867188 24.738281 L -0.402344 -0.691406 L -1.351562 0.785156 Z M 37.921875 26.214844 "
          />
        </g>
        <g clipPath="url(#UnitedKingdom_svg_clip2)" clipRule="nonzero">
          <g clipPath="url(#UnitedKingdom_svg_clip3)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 0 9.570312 L 36.988281 9.570312 L 36.988281 15.953125 L 0 15.953125 Z M 0 9.570312 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedKingdom_svg_clip4)" clipRule="nonzero">
          <g clipPath="url(#UnitedKingdom_svg_clip5)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 15.324219 0 L 21.664062 0 L 21.664062 24.992188 L 15.324219 24.992188 Z M 15.324219 0 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedKingdom_svg_clip6)" clipRule="nonzero">
          <g clipPath="url(#UnitedKingdom_svg_clip7)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 10.632812 L 36.988281 10.632812 L 36.988281 14.886719 L 0 14.886719 Z M 0 10.632812 "
            />
          </g>
        </g>
        <g clipPath="url(#UnitedKingdom_svg_clip8)" clipRule="nonzero">
          <g clipPath="url(#UnitedKingdom_svg_clip9)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 16.382812 0 L 20.609375 0 L 20.609375 24.992188 L 16.382812 24.992188 Z M 16.382812 0 "
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
