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
        <clipPath id="Afghanistan_svg_prefix__a">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="Afghanistan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Afghanistan_svg_prefix__c">
          <path d="M24 0h13v25H24zm0 0" />
        </clipPath>
        <clipPath id="Afghanistan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Afghanistan_svg_prefix__e">
          <path d="M13 7h11v11H13zm0 0" />
        </clipPath>
        <clipPath id="Afghanistan_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Afghanistan_svg_prefix__a)">
        <g clipPath="url(#Afghanistan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h12.152v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Afghanistan_svg_prefix__c)">
        <g clipPath="url(#Afghanistan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M24.836 0h12.152v24.992H24.836zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#Afghanistan_svg_prefix__e)">
        <g clipPath="url(#Afghanistan_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M21.223 8.984a3.866 3.866 0 011.132 2.735 3.864 3.864 0 01-3.859 3.867 3.862 3.862 0 01-3.86-3.867c0-1.067.43-2.031 1.13-2.735l-1.008-1.007a5.275 5.275 0 00-1.547 3.742 5.289 5.289 0 005.285 5.297 5.291 5.291 0 005.285-5.297c0-1.461-.593-2.785-1.55-3.742zm-4.653 4.668h3.852l.418.344h-4.692zm-1.449-.734c.008-.059.004-.121.004-.184l-.012-.027.008.008v-.13c0-.16.094-.405.223-.5.004-.003.008-.003.011-.007v-.012l.004.008c.215-.16.313-.36.375-.375l-.027-.047a.108.108 0 01-.035.004.109.109 0 01-.11-.117c0-.066.051-.117.114-.117.062 0 .113.05.113.117a.11.11 0 01-.031.078l.96 1.676-.05.035-.566-.988c-.063.055-.23.137-.309.223-.012.007-.02.019-.027.03 0 .005 0 .005.004.009l-.008-.004c-.11.152-.094.343-.14.504l-.013.035s.004.004.004.008l-.004-.004c-.046.171-.097.476-.16.421-.074-.074-.234-.289-.355-.386-.047-.04.02-.188.027-.258zm6.672 0a.955.955 0 01-.004-.184c.004-.007.004-.02.008-.027l-.008.008c.004-.043.004-.086.004-.13-.004-.16-.094-.405-.227-.5l-.007-.007v-.012l-.008.008c-.215-.16-.309-.36-.371-.375l.027-.047c.008.004.02.004.031.004.063 0 .114-.05.114-.117a.114.114 0 00-.114-.117.114.114 0 00-.113.117c0 .031.012.059.027.078l-.957 1.676.051.035.567-.988c.058.055.23.137.308.223.008.007.02.019.027.03 0 .005-.003.005-.003.009l.003-.004c.114.152.098.343.145.504l.012.035c-.004 0-.004.004-.008.008l.008-.004c.043.171.097.476.156.421.074-.074.234-.289.36-.386.046-.04-.024-.188-.028-.258zm-2.184-1.95h.399v2.536h-.399zm-2.625-.007h.399v2.535h-.399zm.504-.543l.367-.285 1.27.004.395.277.808.008-.262.281-3.16-.004-.254-.281zm2.121-.895h.399v.766h-.399zm-2.625-.003h.399v.77h-.399zm.961.464h1.094c.148-.078.191-.328.191-.468 0-.414-.289-.61-.578-.621-.043-.004-.093-.036-.105-.079-.031-.086-.024-.32-.055-.316-.027-.004-.02.227-.043.313-.015.039-.062.082-.11.085a.584.584 0 00-.581.618c.008.222.031.355.187.468zm1.664-.632h.399v.09h-.399zm-2.625-.004h.399v.09h-.399zm2.825-.41c-.086.003-.227.164-.223.308h.441c.02-.148-.132-.312-.218-.309zm-2.625-.004c-.086.004-.227.164-.223.308l.441.004c.02-.152-.132-.316-.218-.312zm0 0"
            fillRule="evenodd"
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
