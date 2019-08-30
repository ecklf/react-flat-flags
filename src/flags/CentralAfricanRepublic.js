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
        <clipPath id="CentralAfricanRepublic_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 7 L 0 7 Z M 0 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip3">
          <path d="M 0 18 L 37 18 L 37 25 L 0 25 Z M 0 18 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip5">
          <path d="M 0 12 L 37 12 L 37 19 L 0 19 Z M 0 12 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip7">
          <path d="M 4 1 L 8 1 L 8 5 L 4 5 Z M 4 1 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip9">
          <path d="M 15 0 L 22 0 L 22 25 L 15 25 Z M 15 0 " />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="CentralAfricanRepublic_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#CentralAfricanRepublic_svg_clip1)" clipRule="nonzero">
          <g
            clipPath="url(#CentralAfricanRepublic_svg_clip2)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M -0.527344 0 L 36.988281 0 L 36.988281 6.378906 L -0.527344 6.378906 Z M -0.527344 0 "
            />
          </g>
        </g>
        <g clipPath="url(#CentralAfricanRepublic_svg_clip3)" clipRule="nonzero">
          <g
            clipPath="url(#CentralAfricanRepublic_svg_clip4)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 0 18.609375 L 36.988281 18.609375 L 36.988281 24.992188 L 0 24.992188 Z M 0 18.609375 "
            />
          </g>
        </g>
        <g clipPath="url(#CentralAfricanRepublic_svg_clip5)" clipRule="nonzero">
          <g
            clipPath="url(#CentralAfricanRepublic_svg_clip6)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 12.230469 L 36.988281 12.230469 L 36.988281 18.609375 L 0 18.609375 Z M 0 12.230469 "
            />
          </g>
        </g>
        <g clipPath="url(#CentralAfricanRepublic_svg_clip7)" clipRule="nonzero">
          <g
            clipPath="url(#CentralAfricanRepublic_svg_clip8)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(96.078431%,83.529412%,37.254902%)",
                fillOpacity: 1,
              }}
              d="M 4.988281 4.734375 C 4.839844 4.835938 4.753906 4.777344 4.796875 4.605469 L 4.957031 3.953125 C 4.996094 3.777344 4.921875 3.535156 4.785156 3.417969 L 4.308594 3.003906 C 4.175781 2.886719 4.210938 2.789062 4.386719 2.78125 L 5.054688 2.765625 C 5.234375 2.757812 5.421875 2.613281 5.472656 2.441406 L 5.679688 1.726562 C 5.730469 1.554688 5.820312 1.550781 5.882812 1.722656 L 6.132812 2.425781 C 6.195312 2.59375 6.390625 2.734375 6.570312 2.738281 L 7.25 2.742188 C 7.425781 2.746094 7.464844 2.84375 7.328125 2.960938 L 6.8125 3.417969 C 6.675781 3.535156 6.605469 3.773438 6.65625 3.945312 L 6.820312 4.519531 C 6.871094 4.695312 6.789062 4.757812 6.636719 4.664062 L 6.082031 4.320312 C 5.929688 4.226562 5.6875 4.234375 5.539062 4.339844 Z M 4.988281 4.734375 "
            />
          </g>
        </g>
        <g clipPath="url(#CentralAfricanRepublic_svg_clip9)" clipRule="nonzero">
          <g
            clipPath="url(#CentralAfricanRepublic_svg_clip10)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 15.851562 0 L 21.664062 0 L 21.664062 24.992188 L 15.851562 24.992188 Z M 15.851562 0 "
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
