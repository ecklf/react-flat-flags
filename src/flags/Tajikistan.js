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
        <clipPath id="Tajikistan_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Tajikistan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Tajikistan_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Tajikistan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Tajikistan_svg_prefix__a)">
        <g clipPath="url(#Tajikistan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Tajikistan_svg_prefix__c)">
        <g clipPath="url(#Tajikistan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <path
        d="M22.879 15.914c-.117.078-.188.031-.152-.101l.128-.504a.455.455 0 00-.136-.414l-.387-.32c-.11-.09-.082-.169.063-.173l.539-.011a.382.382 0 00.336-.25l.168-.555c.042-.133.117-.133.164-.004l.203.543c.05.133.207.242.351.242l.551.008c.14 0 .172.074.063.168l-.418.352a.423.423 0 00-.125.41l.132.441c.043.137-.027.184-.148.113l-.445-.265a.447.447 0 00-.438.011zm-10.11 0c-.12.078-.187.031-.152-.101l.125-.504a.446.446 0 00-.137-.414l-.382-.32c-.11-.09-.082-.169.062-.173l.54-.011a.392.392 0 00.335-.25l.168-.555c.04-.133.113-.133.164-.004l.203.543a.399.399 0 00.348.242l.55.008c.145 0 .173.074.063.168l-.418.352a.42.42 0 00-.12.41l.132.441c.04.137-.027.184-.152.113l-.446-.265a.448.448 0 00-.437.011zm8.118-2.469c-.121.082-.188.035-.153-.101l.125-.504a.442.442 0 00-.136-.41l-.383-.32c-.11-.09-.082-.169.062-.172l.54-.016a.392.392 0 00.335-.25l.168-.55c.04-.134.114-.138.164-.005l.203.543a.405.405 0 00.348.242l.55.004c.145 0 .173.078.067.168l-.418.352a.42.42 0 00-.125.41l.133.445c.04.133-.027.184-.152.11l-.445-.262a.448.448 0 00-.438.012zm-6.29 0c-.117.082-.187.035-.152-.101l.13-.504a.451.451 0 00-.137-.41l-.387-.32c-.11-.09-.082-.169.062-.172l.54-.016a.382.382 0 00.335-.25l.168-.55c.043-.134.117-.138.164-.005l.203.543c.051.133.207.238.352.242l.55.004c.141 0 .173.078.063.168l-.418.352a.428.428 0 00-.125.41l.133.445c.043.133-.027.184-.148.11l-.446-.262a.447.447 0 00-.437.012zm3.122-1.98c-.117.082-.188.035-.153-.098l.125-.508a.442.442 0 00-.136-.41l-.383-.32c-.11-.09-.082-.168.062-.172l.54-.016a.381.381 0 00.335-.25l.168-.55c.043-.133.114-.137.164-.004l.204.543a.4.4 0 00.351.242l.547.004c.145.004.176.078.066.172l-.418.347a.428.428 0 00-.125.41l.133.446c.04.133-.027.183-.148.113l-.45-.266a.448.448 0 00-.437.012zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
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
