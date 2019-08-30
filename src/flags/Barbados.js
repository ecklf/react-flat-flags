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
        <clipPath id="Barbados_svg_prefix__a">
          <path d="M12 0h13v25H12zm0 0" />
        </clipPath>
        <clipPath id="Barbados_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Barbados_svg_prefix__c">
          <path d="M14 7h10v11H14zm0 0" />
        </clipPath>
        <clipPath id="Barbados_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <g clipPath="url(#Barbados_svg_prefix__a)">
        <g clipPath="url(#Barbados_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M12.684 0h12.152v24.992H12.684zm0 0"
            fillRule="evenodd"
            fill="#f5d55f"
          />
        </g>
      </g>
      <g clipPath="url(#Barbados_svg_prefix__c)">
        <g clipPath="url(#Barbados_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M19.281 17.547V15.03c.512.035 1.172.16 1.676.278.102-2.204.672-4.641 2.293-6.407-1.11.047-1.973.559-2.652 1.391.215-.035.472-.047.695-.023-.602 1.074-.973 2.62-1.105 3.964a5.555 5.555 0 00-.907-.125V9.98c.239.02.528.098.774.215a18.342 18.342 0 01-1.297-2.75 17.962 17.962 0 01-1.293 2.75c.246-.117.531-.195.773-.215v4.13a5.44 5.44 0 00-.906.124c-.133-1.343-.504-2.89-1.11-3.964.223-.024.485-.012.7.023-.68-.832-1.547-1.344-2.652-1.39 1.617 1.765 2.187 4.202 2.289 6.406.503-.118 1.168-.243 1.68-.278v2.516zm0 0"
            fill="#434953"
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
