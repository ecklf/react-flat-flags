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
        <clipPath id="CentralAfricanRepublic_svg_prefix__a">
          <path d="M0 0h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__c">
          <path d="M0 18h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__e">
          <path d="M0 12h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__g">
          <path d="M4 1h4v4H4zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__i">
          <path d="M15 0h7v25h-7zm0 0" />
        </clipPath>
        <clipPath id="CentralAfricanRepublic_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#fff"
      />
      <g clipPath="url(#CentralAfricanRepublic_svg_prefix__a)">
        <g
          clipPath="url(#CentralAfricanRepublic_svg_prefix__b)"
          clipRule="evenodd"
        >
          <path
            d="M-.527 0h37.515v6.379H-.527zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#CentralAfricanRepublic_svg_prefix__c)">
        <g
          clipPath="url(#CentralAfricanRepublic_svg_prefix__d)"
          clipRule="evenodd"
        >
          <path
            d="M0 18.61h36.988v6.382H0zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CentralAfricanRepublic_svg_prefix__e)">
        <g
          clipPath="url(#CentralAfricanRepublic_svg_prefix__f)"
          clipRule="evenodd"
        >
          <path
            d="M0 12.23h36.988v6.38H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#CentralAfricanRepublic_svg_prefix__g)">
        <g
          clipPath="url(#CentralAfricanRepublic_svg_prefix__h)"
          clipRule="evenodd"
        >
          <path
            d="M4.988 4.734c-.148.102-.234.043-.191-.129l.16-.652a.603.603 0 00-.172-.535l-.476-.414c-.133-.117-.098-.215.078-.223l.668-.015a.486.486 0 00.418-.325l.207-.714c.05-.172.14-.176.203-.004l.25.703a.516.516 0 00.437.312l.68.004c.176.004.215.102.078.219l-.516.457a.553.553 0 00-.156.527l.164.575c.051.175-.03.238-.183.144l-.555-.344a.531.531 0 00-.543.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CentralAfricanRepublic_svg_prefix__i)">
        <g
          clipPath="url(#CentralAfricanRepublic_svg_prefix__j)"
          clipRule="evenodd"
        >
          <path
            d="M15.852 0h5.812v24.992h-5.812zm0 0"
            fillRule="evenodd"
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
