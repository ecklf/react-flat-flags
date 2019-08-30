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
        <clipPath id="Kenya_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 13 L 0 13 Z M 0 0 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip3">
          <path d="M 0 6 L 37 6 L 37 19 L 0 19 Z M 0 6 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip5">
          <path d="M 0 7 L 37 7 L 37 18 L 0 18 Z M 0 7 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip7">
          <path d="M 20 5 L 23 5 L 23 20 L 20 20 Z M 20 5 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip8">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip9">
          <path d="M 14 5 L 17 5 L 17 20 L 14 20 Z M 14 5 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip10">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip11">
          <path d="M 18 4 L 20 4 L 20 12 L 18 12 Z M 18 4 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip12">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip13">
          <path d="M 16 4 L 18 4 L 18 12 L 16 12 Z M 16 4 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip14">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip15">
          <path d="M 18 14 L 20 14 L 20 22 L 18 22 Z M 18 14 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip16">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip17">
          <path d="M 16 14 L 18 14 L 18 22 L 16 22 Z M 16 14 " />
        </clipPath>
        <clipPath id="Kenya_svg_clip18">
          <path d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 " />
        </clipPath>
      </defs>
      <g id="Kenya_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Kenya_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 12.230469 L 0 12.230469 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 0 6.914062 L 36.988281 6.914062 L 36.988281 18.609375 L 0 18.609375 Z M 0 6.914062 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 7.976562 L 36.988281 7.976562 L 36.988281 17.546875 L 0 17.546875 Z M 0 7.976562 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 18.230469 2.125 C 20.417969 2.125 22.195312 6.769531 22.195312 12.496094 C 22.195312 18.222656 20.417969 22.863281 18.230469 22.863281 C 16.042969 22.863281 14.265625 18.222656 14.265625 12.496094 C 14.265625 6.769531 16.042969 2.125 18.230469 2.125 Z M 18.230469 2.125 "
        />
        <g clipPath="url(#Kenya_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 22.722656 5.847656 C 24.179688 5.847656 25.363281 8.945312 25.363281 12.761719 C 25.363281 16.578125 24.179688 19.675781 22.722656 19.675781 C 21.261719 19.675781 20.078125 16.578125 20.078125 12.761719 C 20.078125 8.945312 21.261719 5.847656 22.722656 5.847656 Z M 22.722656 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 13.738281 5.847656 C 15.199219 5.847656 16.382812 8.945312 16.382812 12.761719 C 16.382812 16.578125 15.199219 19.675781 13.738281 19.675781 C 12.28125 19.675781 11.097656 16.578125 11.097656 12.761719 C 11.097656 8.945312 12.28125 5.847656 13.738281 5.847656 Z M 13.738281 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 19.023438 4.253906 C 19.316406 4.253906 19.550781 5.800781 19.550781 7.710938 C 19.550781 9.617188 19.316406 11.167969 19.023438 11.167969 C 18.730469 11.167969 18.496094 9.617188 18.496094 7.710938 C 18.496094 5.800781 18.730469 4.253906 19.023438 4.253906 Z M 19.023438 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip13)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip14)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 17.4375 4.253906 C 17.730469 4.253906 17.964844 5.800781 17.964844 7.710938 C 17.964844 9.617188 17.730469 11.167969 17.4375 11.167969 C 17.144531 11.167969 16.910156 9.617188 16.910156 7.710938 C 16.910156 5.800781 17.144531 4.253906 17.4375 4.253906 Z M 17.4375 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip15)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip16)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 19.023438 14.886719 C 19.316406 14.886719 19.550781 16.4375 19.550781 18.34375 C 19.550781 20.253906 19.316406 21.800781 19.023438 21.800781 C 18.730469 21.800781 18.496094 20.253906 18.496094 18.34375 C 18.496094 16.4375 18.730469 14.886719 19.023438 14.886719 Z M 19.023438 14.886719 "
            />
          </g>
        </g>
        <g clipPath="url(#Kenya_svg_clip17)" clipRule="nonzero">
          <g clipPath="url(#Kenya_svg_clip18)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 17.4375 14.886719 C 17.730469 14.886719 17.964844 16.4375 17.964844 18.34375 C 17.964844 20.253906 17.730469 21.800781 17.4375 21.800781 C 17.144531 21.800781 16.910156 20.253906 16.910156 18.34375 C 16.910156 16.4375 17.144531 14.886719 17.4375 14.886719 Z M 17.4375 14.886719 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(89.803922%,91.372549%,92.941176%)",
            fillOpacity: 1,
          }}
          d="M 18.230469 12.230469 C 18.667969 12.230469 19.023438 12.585938 19.023438 13.027344 C 19.023438 13.46875 18.667969 13.824219 18.230469 13.824219 C 17.792969 13.824219 17.4375 13.46875 17.4375 13.027344 C 17.4375 12.585938 17.792969 12.230469 18.230469 12.230469 Z M 18.230469 12.230469 "
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
