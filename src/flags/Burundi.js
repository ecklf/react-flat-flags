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
        <clipPath id="Burundi_svg_prefix__g">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__a">
          <path d="M18 0h19v24H18zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__c">
          <path d="M0 0h18v24H0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__e">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__f">
          <path d="M11 4h16v17H11zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__h">
          <path d="M16 7h6v5h-6zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__i">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__j">
          <path d="M14 12h5v6h-5zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__k">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__l">
          <path d="M19 12h5v6h-5zm0 0" />
        </clipPath>
        <clipPath id="Burundi_svg_prefix__m">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Burundi_svg_prefix__a)">
        <g clipPath="url(#Burundi_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M36.988.531L18.496 12.496l18.492 10.899zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Burundi_svg_prefix__c)">
        <g clipPath="url(#Burundi_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-1.059.531l18.496 11.965-18.496 10.899zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g
        clipPath="url(#Burundi_svg_prefix__e)"
        clipRule="evenodd"
        fillRule="evenodd"
        fill="#f5f7f9"
      >
        <path d="M-.48 26.012l-1.47-2.223L36.728-1.293 38.199.926zm0 0" />
        <path d="M37.633 26.594l1.472-2.207L.415-.531-1.06 1.676zm0 0" />
      </g>
      <g clipPath="url(#Burundi_svg_prefix__f)">
        <g clipPath="url(#Burundi_svg_prefix__g)" clipRule="evenodd">
          <path
            d="M18.758 4.785c4.234 0 7.664 3.453 7.664 7.711 0 4.258-3.43 7.711-7.664 7.711-4.23 0-7.66-3.453-7.66-7.71 0-4.259 3.43-7.712 7.66-7.712zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Burundi_svg_prefix__h)">
        <g clipPath="url(#Burundi_svg_prefix__i)" clipRule="evenodd">
          <path
            d="M17.918 11.629c-.195.14-.305.062-.25-.172l.207-.871a.785.785 0 00-.223-.711l-.632-.55c-.18-.157-.133-.29.101-.298l.887-.023a.64.64 0 00.555-.434l.277-.949c.066-.23.187-.234.27-.008l.331.938c.082.226.34.414.579.414l.902.012c.238 0 .285.132.105.289l-.687.605a.753.753 0 00-.203.707l.218.766c.067.23-.046.32-.246.191l-.734-.453a.697.697 0 00-.723.023zm0 0"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Burundi_svg_prefix__j)">
        <g clipPath="url(#Burundi_svg_prefix__k)" clipRule="evenodd">
          <path
            d="M15.277 16.945c-.195.14-.308.063-.25-.172l.207-.87a.801.801 0 00-.226-.712l-.633-.55c-.18-.157-.133-.29.105-.297l.887-.024a.64.64 0 00.551-.433l.277-.95c.07-.23.192-.234.27-.007l.336.937c.078.227.34.414.574.414l.906.012c.235 0 .285.133.106.289l-.688.61a.75.75 0 00-.207.706l.223.766c.062.23-.047.316-.25.191l-.735-.457a.699.699 0 00-.718.024zm0 0"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Burundi_svg_prefix__l)">
        <g clipPath="url(#Burundi_svg_prefix__m)" clipRule="evenodd">
          <path
            d="M20.559 16.945c-.192.14-.305.063-.25-.172l.21-.87a.801.801 0 00-.226-.712l-.633-.55c-.18-.157-.133-.29.106-.297l.882-.024a.64.64 0 00.555-.433l.277-.95c.067-.23.188-.234.27-.007l.332.937a.669.669 0 00.578.414l.906.012c.235 0 .282.133.106.289l-.688.61a.75.75 0 00-.207.706l.22.766c.066.23-.044.316-.247.191l-.734-.457a.698.698 0 00-.72.024zm0 0"
            fill="#ed5565"
          />
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
