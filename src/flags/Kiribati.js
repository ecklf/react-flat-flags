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
        <clipPath id="Kiribati_svg_prefix__a">
          <path d="M12 5h13v14H12zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__c">
          <path d="M0 12h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__e">
          <path d="M0 15h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__g">
          <path d="M0 18h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__i">
          <path d="M0 21h37v4H0zm0 0" />
        </clipPath>
        <clipPath id="Kiribati_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Kiribati_svg_prefix__a)">
        <g clipPath="url(#Kiribati_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M18.496 5.848c3.5 0 6.34 2.859 6.34 6.382 0 3.524-2.84 6.38-6.34 6.38-3.504 0-6.344-2.856-6.344-6.38 0-3.523 2.84-6.382 6.344-6.382zm0 0"
            fillRule="evenodd"
            fill="#f5bb41"
          />
        </g>
      </g>
      <g clipPath="url(#Kiribati_svg_prefix__c)">
        <g clipPath="url(#Kiribati_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M36.984 12.23c-2.234 0-3.422 1.055-4.289 1.829-.68.601-1.02.902-1.867.906h-.004c-.847 0-1.191-.305-1.87-.906-.872-.77-2.063-1.82-4.298-1.82h-.004c-2.234 0-3.422 1.054-4.293 1.827-.675.602-1.02.903-1.863.907-.848-.004-1.187-.305-1.867-.907-.867-.773-2.059-1.828-4.293-1.828h-.004c-2.23 0-3.422 1.051-4.293 1.82-.684.602-1.027.907-1.875.907-.848-.004-1.187-.305-1.867-.906-.867-.774-2.059-1.829-4.293-1.829L0 15.871c.848 0 1.188.3 1.867.906.867.77 2.059 1.825 4.293 1.825h.004c2.23 0 3.422-1.051 4.293-1.82.684-.602 1.027-.903 1.875-.903.848 0 1.191.3 1.867.902.871.774 2.059 1.828 4.293 1.828l.004-1.82v1.82c2.234 0 3.426-1.054 4.293-1.828.68-.601 1.02-.902 1.867-.902h.004c.844 0 1.188.3 1.871.902.871.77 2.063 1.82 4.293 1.82h.004c2.238 0 3.426-1.054 4.293-1.824.68-.605 1.02-.906 1.867-.906zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kiribati_svg_prefix__e)">
        <g clipPath="url(#Kiribati_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M36.984 15.422c-2.234 0-3.422 1.055-4.289 1.824-.68.606-1.02.906-1.867.906h-.004c-.847 0-1.191-.3-1.87-.902-.872-.77-2.063-1.82-4.298-1.82h-.004c-2.234 0-3.422 1.054-4.293 1.824-.675.605-1.02.906-1.863.906-.848 0-1.187-.3-1.867-.906-.867-.77-2.059-1.824-4.293-1.824h-.004c-2.23 0-3.422 1.05-4.293 1.82-.684.602-1.027.902-1.875.902-.848 0-1.187-.3-1.867-.906-.867-.77-2.059-1.824-4.293-1.824L0 19.059c.848 0 1.188.304 1.867.906.867.773 2.059 1.828 4.293 1.828h.004c2.23 0 3.422-1.05 4.293-1.82.684-.602 1.027-.907 1.875-.907.848 0 1.191.305 1.867.907.871.773 2.059 1.828 4.293 1.828l.004-1.82v1.82c2.234 0 3.426-1.055 4.293-1.828.68-.602 1.02-.907 1.867-.907h.004c.844 0 1.188.305 1.871.907.871.77 2.063 1.82 4.293 1.82h.004c2.238 0 3.426-1.055 4.293-1.828.68-.602 1.02-.906 1.867-.906zm0 0"
            fill="#4757a9"
          />
        </g>
      </g>
      <g clipPath="url(#Kiribati_svg_prefix__g)">
        <g clipPath="url(#Kiribati_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M36.984 18.61c-2.234.003-3.422 1.058-4.289 1.828-.68.605-1.02.906-1.867.906h-.004c-.847 0-1.191-.301-1.87-.907-.872-.765-2.063-1.82-4.298-1.82h-.004c-2.234.004-3.422 1.059-4.293 1.828-.675.602-1.02.907-1.863.907-.848 0-1.187-.305-1.867-.907-.867-.77-2.059-1.824-4.293-1.828h-.004c-2.23 0-3.422 1.055-4.293 1.82-.684.606-1.027.907-1.875.907-.848 0-1.187-.301-1.867-.907-.867-.769-2.059-1.824-4.293-1.828L0 22.25c.848 0 1.188.305 1.867.906.867.77 2.059 1.828 4.293 1.828h.004c2.23 0 3.422-1.05 4.293-1.82.684-.602 1.027-.906 1.875-.906.848 0 1.191.305 1.867.906.871.77 2.059 1.824 4.293 1.828l.004-1.82v1.82c2.234-.004 3.426-1.058 4.293-1.828.68-.602 1.02-.906 1.867-.906h.004c.844 0 1.188.305 1.871.906.871.77 2.063 1.82 4.293 1.82h.004c2.238 0 3.426-1.058 4.293-1.828.68-.601 1.02-.906 1.867-.906zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kiribati_svg_prefix__i)">
        <g clipPath="url(#Kiribati_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M36.984 21.8c-2.234 0-3.422 1.06-4.289 1.829-.68.601-1.02.906-1.867.906h-.004c-.847 0-1.191-.305-1.87-.906-.872-.77-2.063-1.82-4.298-1.82h-.004c-2.234 0-3.422 1.058-4.293 1.828-.675.601-1.02.906-1.863.906-.848 0-1.187-.305-1.867-.906-.867-.77-2.059-1.828-4.293-1.828h-.004c-2.23 0-3.422 1.05-4.293 1.82-.684.601-1.027.906-1.875.906-.848 0-1.187-.305-1.867-.906C3.43 22.859 2.238 21.8.004 21.8L0 25.44c.848 0 1.188.301 1.867.907.867.77 2.059 1.824 4.293 1.828h.004c2.23 0 3.422-1.055 4.293-1.82.684-.606 1.027-.907 1.875-.907.848 0 1.191.301 1.867.906.871.77 2.059 1.825 4.293 1.829l.004-1.82v1.82c2.234-.004 3.426-1.059 4.293-1.829.68-.605 1.02-.906 1.867-.906h.004c.844 0 1.188.301 1.871.906.871.766 2.063 1.82 4.293 1.82h.004c2.238-.003 3.426-1.058 4.293-1.827.68-.606 1.02-.907 1.867-.907zm0 0"
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
