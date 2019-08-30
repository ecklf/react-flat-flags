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
        <clipPath id="Cameroon_svg_prefix__a">
          <path d="M0 0h11v25H0zm0 0" />
        </clipPath>
        <clipPath id="Cameroon_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Cameroon_svg_prefix__c">
          <path d="M26 0h11v25H26zm0 0" />
        </clipPath>
        <clipPath id="Cameroon_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Cameroon_svg_prefix__a)">
        <g clipPath="url(#Cameroon_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h10.57v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Cameroon_svg_prefix__c)">
        <g clipPath="url(#Cameroon_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M26.422 0h10.566v24.992H26.422zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <path
        d="M16.453 15.84c-.312.226-.496.098-.406-.281l.34-1.414c.09-.38-.075-.899-.364-1.153l-1.027-.898c-.289-.254-.215-.469.168-.48l1.434-.044c.386-.008.789-.324.898-.699l.45-1.547c.109-.375.304-.379.433-.011l.543 1.523c.129.367.55.672.933.676l1.461.015c.387.004.461.215.172.473l-1.113.984c-.29.258-.438.774-.332 1.149l.355 1.246c.11.375-.07.516-.398.309l-1.188-.739c-.328-.207-.855-.187-1.167.035zm0 0"
        fill="#f5bb41"
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
