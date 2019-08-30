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
        <clipPath id="Israel_svg_prefix__a">
          <path d="M13 6h11v13H13zm0 0" />
        </clipPath>
        <clipPath id="Israel_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Israel_svg_prefix__c">
          <path d="M0 0h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Israel_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Israel_svg_prefix__e">
          <path d="M0 21h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Israel_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Israel_svg_prefix__a)">
        <g clipPath="url(#Israel_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M23.723 9.95c.132-.216.027-.395-.23-.395H20.96a.915.915 0 01-.707-.395L18.977 7.06c-.133-.215-.344-.215-.473.003l-1.242 2.094a.905.905 0 01-.703.399h-2.536c-.253 0-.359.18-.23.394l1.285 2.14a.861.861 0 010 .794l-1.285 2.14c-.129.22-.023.399.23.399h2.536c.257 0 .574.176.703.394l1.242 2.098c.129.219.34.219.469 0l1.242-2.098c.129-.218.445-.394.7-.394h2.577c.258 0 .363-.18.23-.399l-1.28-2.14a.861.861 0 010-.793zm-5.075-.567c.051-.094.137-.094.2 0 .058.094.02.172-.09.172s-.156-.078-.11-.172zm-2.59 4.742c-.12 0-.167-.078-.109-.172.063-.094.16-.094.219 0 .062.094.012.172-.11.172zm.11-3.105c-.059.097-.156.097-.219 0-.058-.094-.011-.172.11-.172.12 0 .171.078.109.172zm2.68 4.574c-.063.094-.149.094-.2 0-.046-.098 0-.172.11-.172s.148.074.09.172zm1.09-1.864c-.13.22-.446.395-.704.395h-.953a.928.928 0 01-.707-.39l-.527-.856a.842.842 0 01-.008-.79l.5-.843a.898.898 0 01.7-.398h.995c.258 0 .575.18.703.398l.497.844a.861.861 0 010 .793zm1.519.395c-.121 0-.168-.078-.11-.172.063-.094.16-.094.22 0 .062.094.011.172-.11.172zm.11-3.105c-.06.097-.157.097-.22 0-.058-.094-.011-.172.11-.172s.172.078.11.172zm0 0"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Israel_svg_prefix__c)">
        <g clipPath="url(#Israel_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h36.988v3.191H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Israel_svg_prefix__e)">
        <g clipPath="url(#Israel_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 21.8h36.988v3.192H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
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
