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
        <clipPath id="Canada_svg_prefix__a">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="Canada_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Canada_svg_prefix__c">
          <path d="M24 0h13v25H24zm0 0" />
        </clipPath>
        <clipPath id="Canada_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Canada_svg_prefix__a)">
        <g clipPath="url(#Canada_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h12.152v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Canada_svg_prefix__c)">
        <g clipPath="url(#Canada_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M24.309 0h12.68v24.992h-12.68zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M18.555 7.695c-.18-.34-.47-.34-.649 0l-.265.508c-.176.34-.387.652-.465.703-.082.047-.48-.101-.66-.195-.184-.098-.274.129-.207.504l.242 1.308c.07.375.074.793.012.926-.063.137-.485-.203-.739-.492l-.23-.266c-.254-.289-.504-.375-.555-.191-.05.184-.121.375-.152.426-.032.047-.512 0-.89-.082l-.075-.016c-.379-.082-.61.152-.512.52l.024.086c.097.367.21.77.254.89.039.125-.274.364-.418.434-.141.066-.016.324.28.57l1.43 1.188c.297.246.57.5.614.558.039.063-.012.406-.07.61-.063.199.206.328.593.285l1.094-.13c.387-.046.75-.07.805-.05.054.02.086.434.07.813l-.055 1.316c-.015.383.067.691.18.691.117 0 .203-.312.195-.691l-.035-1.309c-.008-.379.012-.726.043-.773.031-.043.45-.043.836.004l1.094.129c.386.043.656-.086.593-.285-.058-.204-.105-.43-.101-.504.004-.075.348-.418.644-.664l1.43-1.188c.297-.246.422-.504.281-.57-.144-.07-.296-.172-.343-.235-.047-.058.082-.722.18-1.09l.023-.085c.097-.368-.133-.602-.512-.52l-.074.016c-.38.082-.746.133-.809.113-.066-.02-.183-.273-.234-.457-.05-.184-.3-.098-.555.191l-.23.266c-.254.29-.57.574-.707.633-.137.058-.09-.692-.02-1.067l.242-1.308c.067-.375-.023-.602-.207-.504-.18.094-.414.203-.515.234-.102.035-.434-.402-.61-.742zm0 0"
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
