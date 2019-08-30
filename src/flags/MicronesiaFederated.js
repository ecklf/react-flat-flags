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
        <clipPath id="MicronesiaFederated_svg_prefix__a">
          <path d="M10 10h6v5h-6zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__c">
          <path d="M21 10h6v5h-6zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__e">
          <path d="M16 4h6v5h-6zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__g">
          <path d="M16 15h6v5h-6zm0 0" />
        </clipPath>
        <clipPath id="MicronesiaFederated_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#3bafd9"
      />
      <g clipPath="url(#MicronesiaFederated_svg_prefix__a)">
        <g
          clipPath="url(#MicronesiaFederated_svg_prefix__b)"
          clipRule="evenodd"
        >
          <path
            d="M14.355 14.367c.055.23-.062.309-.257.176l-.723-.508a.79.79 0 00-.746-.043l-.758.395c-.215.113-.32.023-.234-.203l.32-.836a.615.615 0 00-.187-.672l-.774-.598c-.187-.148-.14-.262.098-.258l1 .024a.688.688 0 00.61-.39l.358-.84c.094-.223.235-.22.31.003l.296.86a.737.737 0 00.574.445l.797.066c.238.02.277.157.082.301l-.707.524c-.195.144-.312.449-.258.68zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#MicronesiaFederated_svg_prefix__c)">
        <g
          clipPath="url(#MicronesiaFederated_svg_prefix__d)"
          clipRule="evenodd"
        >
          <path
            d="M25.453 14.367c.055.23-.062.309-.258.176l-.726-.508c-.192-.137-.528-.156-.742-.043l-.758.395c-.215.113-.32.023-.235-.203l.32-.836a.622.622 0 00-.187-.672l-.773-.598c-.188-.148-.145-.262.097-.258l1 .024a.693.693 0 00.61-.39l.36-.84c.093-.223.23-.22.308.003l.297.86c.074.222.336.421.574.445l.797.066c.238.02.273.157.078.301l-.707.524a.725.725 0 00-.258.68zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#MicronesiaFederated_svg_prefix__e)">
        <g
          clipPath="url(#MicronesiaFederated_svg_prefix__f)"
          clipRule="evenodd"
        >
          <path
            d="M20.168 8.52c.055.23-.063.308-.258.171l-.723-.504a.79.79 0 00-.746-.042l-.757.394c-.215.113-.32.02-.235-.203l.32-.84a.624.624 0 00-.183-.672l-.777-.597c-.188-.145-.141-.258.097-.254l1 .023a.703.703 0 00.61-.39l.359-.844c.094-.219.234-.219.309.004l.296.859a.722.722 0 00.575.445l.797.07c.238.02.277.153.082.298l-.707.523c-.196.144-.313.453-.258.684zm0 0"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#MicronesiaFederated_svg_prefix__g)">
        <g
          clipPath="url(#MicronesiaFederated_svg_prefix__h)"
          clipRule="evenodd"
        >
          <path
            d="M20.168 19.688c.055.23-.063.308-.258.171l-.723-.507a.79.79 0 00-.746-.043l-.757.394c-.215.113-.32.024-.235-.203l.32-.836a.622.622 0 00-.183-.672l-.777-.597c-.188-.145-.141-.262.097-.254l1 .02a.688.688 0 00.61-.391l.359-.84c.094-.223.234-.22.309.004l.296.859a.737.737 0 00.575.445l.797.067c.238.02.277.156.082.3l-.707.524c-.196.144-.313.45-.258.68zm0 0"
            fill="#f5f7f9"
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
