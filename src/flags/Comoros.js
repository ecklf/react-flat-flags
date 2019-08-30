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
        <clipPath id="Comoros_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__a">
          <path d="M0 0h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__c">
          <path d="M0 18h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__e">
          <path d="M0 12h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__g">
          <path d="M0 0h22v24H0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__i">
          <path d="M5 5h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__k">
          <path d="M5 8h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__m">
          <path d="M5 11h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__o">
          <path d="M5 14h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__p">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__q">
          <path d="M1 3h5v18H1zm0 0" />
        </clipPath>
        <clipPath id="Comoros_svg_prefix__r">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#fff"
      />
      <g clipPath="url(#Comoros_svg_prefix__a)">
        <g clipPath="url(#Comoros_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M-.527 0h37.515v6.379H-.527zm0 0"
            fillRule="evenodd"
            fill="#f1d55f"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__c)">
        <g clipPath="url(#Comoros_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 18.61h36.988v6.382H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__e)">
        <g clipPath="url(#Comoros_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 12.23h36.988v6.38H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__g)">
        <g clipPath="url(#Comoros_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0-1.063L21.664 11.7 0 23.93zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__i)">
        <g clipPath="url(#Comoros_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M6.441 7.992c-.12.086-.191.04-.156-.113l.133-.555a.522.522 0 00-.14-.453l-.4-.351c-.108-.102-.081-.188.067-.192l.555-.016a.402.402 0 00.344-.277l.172-.605c.043-.149.117-.149.168-.004l.21.597c.051.145.211.266.36.266l.562.008c.149 0 .18.082.067.183l-.43.387a.492.492 0 00-.125.453l.137.489c.039.148-.031.203-.156.125l-.457-.293a.424.424 0 00-.45.015zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__k)">
        <g clipPath="url(#Comoros_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M6.441 11.16c-.12.09-.191.04-.156-.11l.133-.554a.515.515 0 00-.14-.453l-.4-.352c-.108-.101-.081-.187.067-.191l.555-.016a.402.402 0 00.344-.277l.172-.605c.043-.149.117-.153.168-.008l.21.601c.051.145.211.262.36.266l.562.004c.149.004.18.086.067.187l-.43.387a.492.492 0 00-.125.453l.137.488c.039.149-.031.204-.156.122l-.457-.29a.432.432 0 00-.45.012zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__m)">
        <g clipPath="url(#Comoros_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M6.441 14.332c-.12.09-.191.04-.156-.11l.133-.558a.522.522 0 00-.14-.453l-.4-.352c-.108-.097-.081-.183.067-.187l.555-.016a.408.408 0 00.344-.277l.172-.61c.043-.144.117-.148.168-.003l.21.597c.051.145.211.266.36.266l.562.008c.149 0 .18.086.067.187l-.43.387a.488.488 0 00-.125.45l.137.491c.039.145-.031.2-.156.121l-.457-.293a.432.432 0 00-.45.016zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__o)">
        <g clipPath="url(#Comoros_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M6.441 17.504c-.12.086-.191.039-.156-.113l.133-.555a.522.522 0 00-.14-.453l-.4-.352c-.108-.101-.081-.187.067-.191l.555-.016a.404.404 0 00.344-.273l.172-.61c.043-.148.117-.148.168-.004l.21.598c.051.145.211.266.36.266l.562.008c.149 0 .18.086.067.183l-.43.387a.492.492 0 00-.125.453l.137.488c.039.149-.031.203-.156.125l-.457-.293a.424.424 0 00-.45.016zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#Comoros_svg_prefix__q)">
        <g clipPath="url(#Comoros_svg_prefix__r)" clipRule="evenodd">
          <path
            d="M5.727 17.648l-.012.016c-.098.18-.2.336-.309.461-1.047 1.207-1.66-.684-2.027-4.219a21.456 21.456 0 01-.11-2.062c-.007-.684.012-1.383.067-2.078.289-3.606.863-5.723 1.93-4.73.113.105.218.237.32.398l.012.011c.035.035.07-.039.082-.16a.554.554 0 00-.032-.258c-.253-.68-.554-1.207-.886-1.52-1.344-1.245-2.727 1.415-3.09 5.938a28.64 28.64 0 00-.086 2.516c.012.828.055 1.664.14 2.492.458 4.442 1.891 6.817 3.204 5.297.328-.375.617-.96.86-1.695a.665.665 0 00.022-.262c-.011-.121-.05-.184-.085-.145zm0 0"
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
