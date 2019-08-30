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
        <clipPath id="CapeVerde_svg_prefix__k">
          <path d="M5 13h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__a">
          <path d="M0 11h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__c">
          <path d="M0 12h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__e">
          <path d="M10 7h4v5h-4zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__g">
          <path d="M10 18h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__i">
          <path d="M15 13h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__m">
          <path d="M6 9h4v4H6zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__o">
          <path d="M13 9h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__p">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__q">
          <path d="M6 17h4v4H6zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__r">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__s">
          <path d="M13 17h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="CapeVerde_svg_prefix__t">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#CapeVerde_svg_prefix__a)">
        <g clipPath="url(#CapeVerde_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 11.168h36.988v7.441H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__c)">
        <g clipPath="url(#CapeVerde_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 12.762h36.988v4.254H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__e)">
        <g clipPath="url(#CapeVerde_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M10.8 11.113c-.148.106-.23.047-.19-.129l.16-.652a.596.596 0 00-.172-.531l-.477-.414c-.133-.117-.098-.219.078-.223l.668-.02a.48.48 0 00.418-.324l.207-.71c.051-.176.14-.176.203-.008l.25.703a.502.502 0 00.438.312l.68.008c.175 0 .214.098.078.219l-.516.453a.557.557 0 00-.156.531l.164.574c.05.172-.031.239-.184.145l-.554-.344a.54.54 0 00-.543.016zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__g)">
        <g clipPath="url(#CapeVerde_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M10.8 21.75c-.148.102-.23.043-.19-.129l.16-.656a.6.6 0 00-.172-.531l-.477-.414c-.133-.118-.098-.215.078-.223l.668-.016a.486.486 0 00.418-.324l.207-.715c.051-.172.14-.176.203-.004l.25.703a.505.505 0 00.438.309l.68.008c.175.004.214.101.078.219l-.516.457a.553.553 0 00-.156.527l.164.574c.05.176-.031.238-.184.145l-.554-.344a.531.531 0 00-.543.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__i)">
        <g clipPath="url(#CapeVerde_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M16.082 16.434c-.145.101-.23.043-.187-.133l.156-.653a.583.583 0 00-.168-.53l-.477-.415c-.136-.117-.101-.219.078-.223l.668-.02a.474.474 0 00.414-.323l.211-.711c.051-.172.141-.176.203-.008l.25.703a.501.501 0 00.434.313l.684.007c.175 0 .21.102.078.22l-.52.452a.57.57 0 00-.152.532l.164.574c.05.172-.035.238-.188.144l-.55-.343a.531.531 0 00-.543.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__k)">
        <g clipPath="url(#CapeVerde_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M6.043 16.434c-.145.101-.23.043-.188-.133l.157-.653a.593.593 0 00-.168-.53l-.477-.415c-.137-.117-.101-.219.078-.223l.668-.02a.474.474 0 00.414-.323l.211-.711c.051-.172.14-.176.2-.008l.253.703a.492.492 0 00.434.313l.68.007c.18 0 .215.102.082.22l-.52.452a.57.57 0 00-.152.532l.164.574c.05.172-.035.238-.188.144l-.55-.343a.53.53 0 00-.543.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__m)">
        <g clipPath="url(#CapeVerde_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M7.102 12.71c-.149.102-.23.044-.192-.132l.16-.652a.585.585 0 00-.172-.531l-.476-.415c-.133-.117-.098-.214.078-.222l.668-.02a.476.476 0 00.418-.32l.207-.715c.05-.172.144-.176.203-.008l.25.707a.505.505 0 00.438.309l.68.008c.179.004.214.101.077.219l-.515.453a.563.563 0 00-.156.53l.164.575c.05.176-.032.238-.184.145l-.555-.344a.524.524 0 00-.539.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__o)">
        <g clipPath="url(#CapeVerde_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M14.5 12.71c-.148.102-.234.044-.191-.132l.16-.652a.596.596 0 00-.172-.531l-.477-.415c-.133-.117-.097-.214.078-.222l.668-.02a.476.476 0 00.418-.32l.207-.715c.051-.172.141-.176.204-.008l.25.707a.505.505 0 00.437.309l.68.008c.175.004.215.101.078.219l-.516.453a.563.563 0 00-.156.53l.164.575c.05.176-.031.238-.184.145l-.554-.344a.531.531 0 00-.543.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__q)">
        <g clipPath="url(#CapeVerde_svg_prefix__r)" clipRule="evenodd">
          <path
            d="M7.102 20.152c-.149.106-.23.047-.192-.129l.16-.652a.585.585 0 00-.172-.531l-.476-.414c-.133-.117-.098-.219.078-.223l.668-.02a.474.474 0 00.418-.324l.207-.71c.05-.176.144-.176.203-.008l.25.703a.502.502 0 00.438.312l.68.008c.179 0 .214.098.077.219l-.515.453a.557.557 0 00-.156.531l.164.574c.05.172-.032.239-.184.145l-.555-.344a.524.524 0 00-.539.02zm0 0"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#CapeVerde_svg_prefix__s)">
        <g clipPath="url(#CapeVerde_svg_prefix__t)" clipRule="evenodd">
          <path
            d="M14.5 20.152c-.148.106-.234.047-.191-.129l.16-.652a.596.596 0 00-.172-.531l-.477-.414c-.133-.117-.097-.219.078-.223l.668-.02a.474.474 0 00.418-.324l.207-.71c.051-.176.141-.176.204-.008l.25.703a.502.502 0 00.437.312l.68.008c.175 0 .215.098.078.219l-.516.453a.557.557 0 00-.156.531l.164.574c.05.172-.031.239-.184.145l-.554-.344a.531.531 0 00-.543.02zm0 0"
            fill="#f5d55f"
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
