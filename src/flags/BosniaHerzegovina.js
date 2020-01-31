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
        <clipPath id="BosniaHerzegovina_svg_prefix__a">
          <path d="M6 0h21v25H6zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__c">
          <path d="M3 1h4v3H3zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__e">
          <path d="M6 3h3v4H6zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__g">
          <path d="M8 6h3v4H8zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__i">
          <path d="M10 9h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__k">
          <path d="M12 12h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__m">
          <path d="M15 15h3v4h-3zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__o">
          <path d="M17 18h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__p">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__q">
          <path d="M19 21h4v3h-4zm0 0" />
        </clipPath>
        <clipPath id="BosniaHerzegovina_svg_prefix__r">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__a)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M6.871 0h19.55v24.992zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__c)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M3.848 2.523c-.141-.043-.149-.128-.012-.191l.504-.23a.498.498 0 00.262-.387l.023-.528c.008-.148.09-.175.184-.062l.355.43a.4.4 0 00.426.105l.57-.23c.14-.055.188.004.11.129l-.329.53a.417.417 0 00.02.446l.344.45c.09.117.047.19-.102.163l-.558-.105a.467.467 0 00-.426.172l-.29.406c-.085.121-.171.098-.187-.05l-.062-.54a.455.455 0 00-.29-.347zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__e)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M6.137 5.45c-.145-.044-.149-.13-.016-.192l.508-.23a.485.485 0 00.258-.387l.027-.528c.004-.148.09-.176.184-.062l.355.43a.4.4 0 00.426.105l.57-.23c.137-.055.188.003.106.128l-.328.528a.424.424 0 00.023.449l.344.45c.09.116.043.19-.102.163L7.93 5.97a.474.474 0 00-.426.172l-.285.406c-.09.121-.176.098-.192-.05l-.062-.54a.44.44 0 00-.29-.348zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__g)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M8.422 8.375c-.14-.043-.149-.129-.012-.191l.508-.235a.497.497 0 00.258-.383l.023-.527c.008-.148.09-.18.188-.062l.351.425c.098.118.29.164.426.11l.57-.23c.141-.055.188 0 .11.128l-.328.527a.425.425 0 00.02.446l.343.453c.094.117.047.191-.098.164l-.562-.105a.467.467 0 00-.426.171l-.29.403c-.085.125-.171.101-.187-.047l-.062-.54a.447.447 0 00-.29-.347zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__i)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M10.71 11.3c-.144-.042-.148-.128-.01-.19l.503-.235a.492.492 0 00.262-.387l.023-.523c.004-.149.09-.18.184-.063l.355.426a.395.395 0 00.426.11l.57-.231c.141-.059.188 0 .11.129l-.332.527a.425.425 0 00.023.446l.344.453c.09.117.047.191-.102.164l-.562-.106a.454.454 0 00-.422.172l-.289.403c-.09.12-.172.101-.191-.047l-.059-.54a.452.452 0 00-.293-.347zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__k)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M12.996 14.223c-.14-.04-.144-.125-.012-.188l.508-.234a.488.488 0 00.258-.387l.023-.523c.008-.153.09-.18.188-.067l.355.43a.389.389 0 00.422.105l.575-.23c.136-.055.187.004.105.133l-.328.527a.425.425 0 00.02.445l.347.45c.09.12.043.195-.102.168l-.562-.11a.47.47 0 00-.426.172l-.289.406c-.086.121-.172.102-.187-.047l-.063-.539a.44.44 0 00-.289-.347zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__m)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M15.285 17.148c-.14-.043-.148-.128-.012-.191l.504-.23a.498.498 0 00.262-.387l.023-.527c.008-.149.09-.176.184-.063l.356.43c.097.113.285.16.425.105l.57-.23c.141-.055.188.004.11.133l-.328.527a.417.417 0 00.02.445l.343.45c.09.117.047.19-.101.163l-.559-.105a.467.467 0 00-.426.172l-.289.406c-.086.121-.172.098-.187-.05l-.063-.54a.447.447 0 00-.289-.347zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__o)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M17.574 20.074c-.144-.043-.148-.129-.015-.191l.507-.23a.485.485 0 00.258-.387l.028-.528c.003-.148.09-.175.183-.062l.356.43a.4.4 0 00.425.105l.57-.23c.137-.055.188.003.106.128l-.328.528a.424.424 0 00.023.449l.344.45c.09.116.043.19-.101.163l-.563-.105a.474.474 0 00-.426.172l-.285.406c-.09.121-.176.098-.191-.05l-.063-.54a.44.44 0 00-.289-.348zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#BosniaHerzegovina_svg_prefix__q)">
        <g clipPath="url(#BosniaHerzegovina_svg_prefix__r)" clipRule="evenodd">
          <path
            d="M19.535 22.582c-.144-.043-.148-.129-.015-.191l.507-.235a.479.479 0 00.258-.383l.024-.527c.007-.148.093-.18.187-.062l.356.425a.39.39 0 00.421.11l.575-.23c.136-.055.187.003.105.128l-.328.528a.425.425 0 00.02.445l.347.453c.09.117.043.191-.101.164l-.563-.105a.474.474 0 00-.426.171l-.289.403c-.086.125-.172.101-.187-.047l-.063-.54a.44.44 0 00-.289-.347zm0 0"
            fill="#fff"
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
