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
        <clipPath id="Spain_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 6 L 0 6 Z M 0 0 " />
        </clipPath>
        <clipPath id="Spain_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Spain_svg_clip3">
          <path d="M 0 19 L 37 19 L 37 25 L 0 25 Z M 0 19 " />
        </clipPath>
        <clipPath id="Spain_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Spain_svg_clip5">
          <path d="M 3 8 L 11 8 L 11 18 L 3 18 Z M 3 8 " />
        </clipPath>
        <clipPath id="Spain_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Spain_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Spain_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Spain_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 5.316406 L 0 5.316406 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Spain_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Spain_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 19.675781 L 36.988281 19.675781 L 36.988281 24.992188 L 0 24.992188 Z M 0 19.675781 "
            />
          </g>
        </g>
        <g clipPath="url(#Spain_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Spain_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 8.855469 9.304688 C 7.742188 9.304688 7.136719 8.507812 7.136719 8.507812 C 7.136719 8.507812 6.53125 9.304688 5.417969 9.304688 C 4.390625 9.304688 3.699219 8.644531 3.699219 8.644531 L 3.699219 12.980469 C 3.730469 15.835938 7.132812 17.015625 7.132812 17.015625 C 7.132812 17.015625 10.570312 15.835938 10.570312 12.980469 L 10.570312 8.644531 C 10.570312 8.644531 9.882812 9.304688 8.855469 9.304688 Z M 8.855469 9.304688 "
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
