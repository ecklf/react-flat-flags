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
        <clipPath id="SouthSudan_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__c">
          <path d="M0 8h37v10H0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__e">
          <path d="M0 9h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__g">
          <path d="M0 3h17v20H0zm0 0" />
        </clipPath>
        <clipPath id="SouthSudan_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#SouthSudan_svg_prefix__a)">
        <g clipPath="url(#SouthSudan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#SouthSudan_svg_prefix__c)">
        <g clipPath="url(#SouthSudan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 8.508h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#SouthSudan_svg_prefix__e)">
        <g clipPath="url(#SouthSudan_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 9.57h36.988v6.383H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#SouthSudan_svg_prefix__g)">
        <g clipPath="url(#SouthSudan_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M-.531 13.027l.07-9.84 17.375 9.84-17.375 9.84zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <path
        d="M4.629 15.738c-.215.29-.41.23-.438-.133l-.097-1.351c-.024-.363-.317-.777-.645-.922l-1.156-.508c-.328-.144-.32-.355.016-.472l1.253-.442c.336-.117.602-.512.594-.875L4.121 9.54c-.012-.363.16-.426.379-.137l.902 1.203c.22.29.676.442 1.016.336l1.297-.398c.34-.105.469.062.281.371l-.703 1.188c-.188.308-.172.812.027 1.113l.664 1.004c.2.304.079.48-.27.39l-1.253-.324c-.348-.09-.805.074-1.02.363zm0 0"
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
