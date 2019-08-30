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
        <clipPath id="AntiguaBarbuda_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip3">
          <path d="M 13 3 L 24 3 L 24 14 L 13 14 Z M 13 3 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip5">
          <path d="M 0 8 L 37 8 L 37 18 L 0 18 Z M 0 8 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip7">
          <path d="M 0 17 L 37 17 L 37 25 L 0 25 Z M 0 17 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip9">
          <path d="M 0 0 L 19 0 L 19 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip11">
          <path d="M 18 0 L 37 0 L 37 25 L 18 25 Z M 18 0 " />
        </clipPath>
        <clipPath id="AntiguaBarbuda_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="AntiguaBarbuda_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#AntiguaBarbuda_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip2)" clipRule="evenodd">
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
        <g clipPath="url(#AntiguaBarbuda_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,73.333333%,25.490196%)",
                fillOpacity: 1,
              }}
              d="M 18.230469 3.722656 C 21.003906 3.722656 23.25 5.984375 23.25 8.773438 C 23.25 11.5625 21.003906 13.824219 18.230469 13.824219 C 15.457031 13.824219 13.210938 11.5625 13.210938 8.773438 C 13.210938 5.984375 15.457031 3.722656 18.230469 3.722656 Z M 18.230469 3.722656 "
            />
          </g>
        </g>
        <g clipPath="url(#AntiguaBarbuda_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(23.137255%,68.627451%,85.098039%)",
                fillOpacity: 1,
              }}
              d="M 0 8.507812 L 36.988281 8.507812 L 36.988281 17.015625 L 0 17.015625 Z M 0 8.507812 "
            />
          </g>
        </g>
        <g clipPath="url(#AntiguaBarbuda_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 25.523438 L 0 25.523438 Z M 0 17.015625 "
            />
          </g>
        </g>
        <g clipPath="url(#AntiguaBarbuda_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 18.496094 24.992188 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#AntiguaBarbuda_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#AntiguaBarbuda_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 36.988281 0 L 18.496094 24.992188 L 36.988281 24.992188 Z M 36.988281 0 "
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
