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
        <clipPath id="Syria_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Syria_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Syria_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Syria_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Syria_svg_prefix__a)">
        <g clipPath="url(#Syria_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Syria_svg_prefix__c)">
        <g clipPath="url(#Syria_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <path
        d="M11.168 15.84c-.313.226-.496.098-.402-.281l.336-1.414c.09-.38-.075-.899-.364-1.153l-1.023-.898c-.293-.254-.219-.469.168-.48l1.433-.044c.383-.008.786-.324.895-.699l.45-1.547c.109-.375.304-.379.437-.011l.539 1.523c.129.367.55.672.933.676l1.465.015c.383.004.461.215.168.473l-1.11.984c-.292.258-.44.774-.331 1.149l.355 1.246c.106.375-.074.516-.402.309l-1.188-.739c-.328-.207-.851-.187-1.168.035zm0 0M22.266 15.84c-.313.226-.496.098-.407-.281l.34-1.414c.09-.38-.074-.899-.363-1.153l-1.027-.898c-.29-.254-.215-.469.168-.48l1.433-.044c.387-.008.79-.324.899-.699l.449-1.547c.11-.375.305-.379.433-.011l.543 1.523c.13.367.551.672.934.676l1.46.015c.388.004.462.215.173.473l-1.113.984c-.29.258-.438.774-.333 1.149l.356 1.246c.11.375-.07.516-.398.309l-1.188-.739c-.328-.207-.855-.187-1.168.035zm0 0"
        fill="#57a763"
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
