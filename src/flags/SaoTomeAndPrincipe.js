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
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__c">
          <path d="M17 10h7v6h-7zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__e">
          <path d="M26 10h7v6h-7zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__g">
          <path d="M0 17h37v8H0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__i">
          <path d="M0 0h16v25H0zm0 0" />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ffcd53"
      />
      <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__a)">
        <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__c)">
        <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M19.25 15.344c-.27.164-.422.062-.336-.23l.32-1.09c.086-.294-.039-.7-.28-.903l-.849-.719c-.238-.203-.171-.37.157-.37l1.215.003c.328 0 .675-.238.777-.523l.418-1.192c.101-.285.27-.285.371 0l.422 1.196c.101.289.45.535.777.546l1.238.043c.329.012.387.18.137.372l-.969.738c-.253.195-.39.59-.308.887l.27.972c.081.293-.075.399-.348.23l-.989-.6c-.273-.165-.718-.165-.992.003zm0 0"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__e)">
        <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M27.707 15.344c-.273.164-.426.062-.336-.23l.32-1.09c.086-.294-.043-.7-.28-.903l-.849-.719c-.242-.203-.171-.37.153-.37l1.219.003c.324 0 .675-.238.777-.523l.418-1.192c.101-.285.266-.285.367 0l.422 1.196c.102.289.453.535.777.546l1.242.043c.325.012.387.18.133.372l-.968.738c-.25.195-.391.59-.309.887l.273.972c.082.293-.074.399-.347.23l-.992-.6c-.274-.165-.72-.165-.989.003zm0 0"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__g)">
        <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M0 17.016h36.988v8.507H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__i)">
        <g clipPath="url(#SaoTomeAndPrincipe_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M0 0l15.324 12.762L0 24.992zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
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
