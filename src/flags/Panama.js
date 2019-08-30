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
        <clipPath id="Panama_svg_prefix__a">
          <path d="M18 0h19v13H18zm0 0" />
        </clipPath>
        <clipPath id="Panama_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Panama_svg_prefix__c">
          <path d="M0 12h19v13H0zm0 0" />
        </clipPath>
        <clipPath id="Panama_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Panama_svg_prefix__a)">
        <g clipPath="url(#Panama_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M18.496 0h18.492v12.762H18.496zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Panama_svg_prefix__c)">
        <g clipPath="url(#Panama_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 12.762h18.496v12.761H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M7.605 8.953c-.242.172-.386.074-.316-.215l.262-1.09c.07-.293-.055-.691-.281-.886l-.793-.688c-.227-.195-.168-.363.128-.37l1.114-.032a.8.8 0 00.691-.543l.348-1.188c.086-.289.238-.293.34-.007l.418 1.171c.101.282.425.516.722.52l1.133.012c.297 0 .356.164.133.363l-.863.758a.933.933 0 00-.254.883l.273.957c.082.289-.055.398-.308.238l-.922-.57a.89.89 0 00-.903.03zm0 0"
        fill="#4757a9"
      />
      <path
        d="M26.098 21.184c-.243.171-.383.074-.313-.22l.262-1.085c.07-.293-.055-.692-.281-.887l-.793-.687c-.227-.2-.168-.364.129-.375l1.109-.032a.8.8 0 00.695-.539l.348-1.187c.086-.29.234-.293.336-.012l.418 1.176c.101.281.43.516.726.52l1.133.011c.297 0 .356.164.133.363l-.863.758c-.223.196-.34.594-.258.883l.277.957c.082.29-.058.395-.312.238l-.918-.57c-.254-.156-.66-.144-.903.031zm0 0"
        fill="#ed5565"
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
