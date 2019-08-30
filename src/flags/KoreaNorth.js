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
        <clipPath id="KoreaNorth_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 4 L 0 4 Z M 0 0 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip3">
          <path d="M 0 21 L 37 21 L 37 25 L 0 25 Z M 0 21 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip5">
          <path d="M 0 5 L 37 5 L 37 20 L 0 20 Z M 0 5 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip7">
          <path d="M 2 9 L 11 9 L 11 17 L 2 17 Z M 2 9 " />
        </clipPath>
        <clipPath id="KoreaNorth_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="KoreaNorth_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#KoreaNorth_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#KoreaNorth_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 3.722656 L 0 3.722656 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#KoreaNorth_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#KoreaNorth_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 21.269531 L 36.988281 21.269531 L 36.988281 24.992188 L 0 24.992188 Z M 0 21.269531 "
            />
          </g>
        </g>
        <g clipPath="url(#KoreaNorth_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#KoreaNorth_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 5.847656 L 36.988281 5.847656 L 36.988281 19.140625 L 0 19.140625 Z M 0 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#KoreaNorth_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#KoreaNorth_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 6.339844 9.039062 C 8.382812 9.039062 10.039062 10.707031 10.039062 12.761719 C 10.039062 14.816406 8.382812 16.484375 6.339844 16.484375 C 4.296875 16.484375 2.640625 14.816406 2.640625 12.761719 C 2.640625 10.707031 4.296875 9.039062 6.339844 9.039062 Z M 6.339844 9.039062 "
            />
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 4.414062 16.363281 C 4.074219 16.605469 3.875 16.46875 3.976562 16.058594 L 4.339844 14.535156 C 4.4375 14.128906 4.261719 13.570312 3.945312 13.292969 L 2.839844 12.332031 C 2.527344 12.054688 2.605469 11.820312 3.023438 11.808594 L 4.570312 11.765625 C 4.984375 11.753906 5.421875 11.414062 5.539062 11.011719 L 6.023438 9.347656 C 6.140625 8.945312 6.351562 8.9375 6.492188 9.332031 L 7.078125 10.972656 C 7.21875 11.371094 7.671875 11.699219 8.085938 11.703125 L 9.667969 11.71875 C 10.082031 11.722656 10.164062 11.953125 9.851562 12.226562 L 8.648438 13.289062 C 8.335938 13.566406 8.175781 14.121094 8.289062 14.527344 L 8.675781 15.867188 C 8.789062 16.269531 8.597656 16.421875 8.242188 16.199219 L 6.957031 15.402344 C 6.605469 15.183594 6.039062 15.199219 5.699219 15.441406 Z M 4.414062 16.363281 "
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
