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
        <clipPath id="Azerbaijan_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Azerbaijan_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Azerbaijan_svg_prefix__c">
          <path d="M0 16h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Azerbaijan_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Azerbaijan_svg_prefix__a)">
        <g clipPath="url(#Azerbaijan_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Azerbaijan_svg_prefix__c)">
        <g clipPath="url(#Azerbaijan_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 16.484h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <path
        d="M20.82 14.906c-.004.004-.008.004-.011.008-.13.07-.266.133-.41.188-1.391.488-2.91-.278-3.391-1.715a2.855 2.855 0 01-.149-.836 2.838 2.838 0 01.09-.844c.383-1.46 1.844-2.32 3.266-1.918.148.043.289.098.422.16.004.004.011.004.015.004.047.016.098-.015.11-.062a.098.098 0 00-.04-.106 3.326 3.326 0 00-1.183-.617c-1.781-.504-3.617.574-4.098 2.41a3.545 3.545 0 00.07 2.031c.606 1.805 2.512 2.766 4.259 2.153a3.27 3.27 0 001.136-.692.097.097 0 00.032-.105.093.093 0 00-.118-.059zm-.386-3.312l.164-.54c.047-.163.132-.163.187-.003l.227.664.039-.02.523-.355c.14-.09.219-.031.18.129l-.14.558.429.008c.168.004.2.098.074.207l-.379.332.02.02.433.363c.13.11.102.203-.066.211l-.605.023-.032.004.14.52c.044.164-.034.223-.175.133l-.383-.246-.175.488c-.055.16-.153.156-.215 0l-.215-.574-.024.011-.52.368c-.136.097-.214.043-.175-.125l.152-.618.004-.004-.445-.05c-.164-.024-.191-.121-.059-.22l.336-.241-.425-.387c-.125-.113-.09-.207.078-.207l.617-.012.039-.004-.211-.652c-.055-.164.016-.215.152-.113zm0 0"
        fillRule="evenodd"
        fill="#fff"
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
