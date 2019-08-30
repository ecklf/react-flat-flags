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
        <clipPath id="Uruguay_svg_prefix__a">
          <path d="M0 10h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__c">
          <path d="M0 19h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__e">
          <path d="M0 0h37v6H0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__g">
          <path d="M0 0h16v16H0zm0 0" />
        </clipPath>
        <clipPath id="Uruguay_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Uruguay_svg_prefix__a)">
        <g clipPath="url(#Uruguay_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 10.098h36.988v5.324H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Uruguay_svg_prefix__c)">
        <g clipPath="url(#Uruguay_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 19.672h36.988v5.32H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Uruguay_svg_prefix__e)">
        <g clipPath="url(#Uruguay_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0-.004h36.988V5.32H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Uruguay_svg_prefix__g)">
        <g clipPath="url(#Uruguay_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 0h15.852v15.422H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <path
        d="M12.625 9.258c0-.203.082-.512.18-.688l.316-.547a.712.712 0 000-.64l-.324-.567a1.624 1.624 0 01-.184-.687l-.004-.652a.705.705 0 00-.32-.551l-.547-.317a1.567 1.567 0 01-.5-.5l-.316-.55a.7.7 0 00-.547-.317h-.652c-.2 0-.508-.082-.684-.183l-.563-.325a.703.703 0 00-.636 0l-.543.32c-.172.102-.48.188-.684.188h-.629c-.199 0-.449.14-.547.317l-.324.566a1.663 1.663 0 01-.5.504l-.562.332a.718.718 0 00-.317.555l.004.632c0 .204-.082.512-.18.688l-.316.547a.712.712 0 000 .64l.324.567c.102.172.184.484.184.687l.004.653c0 .203.144.449.32.55l.547.317c.176.098.398.324.5.5l.316.55a.704.704 0 00.547.317h.649c.203 0 .511.082.687.184l.563.324c.176.101.46.101.633-.004l.546-.316c.172-.102.48-.188.68-.188h.633a.71.71 0 00.547-.316l.324-.567c.102-.176.328-.402.5-.508l.563-.328a.704.704 0 00.312-.554zm0 0"
        fill="#f5d55f"
      />
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
