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
        <clipPath id="PapuaNewGuinea_svg_prefix__a">
          <path d="M5 9h4v4H5zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__c">
          <path d="M10 11h4v4h-4zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__e">
          <path d="M2 14h4v4H2zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__g">
          <path d="M6 19h4v4H6zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__i">
          <path d="M7 15h4v3H7zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="PapuaNewGuinea_svg_prefix__k">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#434953"
      />
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__a)">
        <g clipPath="url(#PapuaNewGuinea_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M6.047 12.621c-.145.102-.227.047-.184-.125l.153-.633a.59.59 0 00-.164-.52l-.465-.402c-.133-.113-.098-.21.074-.214l.652-.02a.458.458 0 00.403-.312l.207-.696c.047-.168.136-.172.195-.004l.246.684c.059.164.25.3.422.3l.664.008c.172 0 .207.098.074.211l-.504.442a.549.549 0 00-.148.515l.16.56c.05.167-.031.233-.18.14l-.539-.332a.511.511 0 00-.527.015zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__c)">
        <g clipPath="url(#PapuaNewGuinea_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M11.379 14.395c-.14.101-.227.043-.184-.125l.153-.637a.565.565 0 00-.164-.516l-.465-.402c-.133-.113-.098-.211.078-.215l.648-.02a.472.472 0 00.407-.316l.203-.691c.047-.168.136-.172.195-.008l.246.683c.059.168.25.305.422.305l.664.008c.172 0 .207.098.078.21l-.504.442a.551.551 0 00-.152.516l.16.559c.05.167-.031.23-.18.14l-.539-.332a.511.511 0 00-.527.016zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__e)">
        <g clipPath="url(#PapuaNewGuinea_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M3.379 17.496c-.14.102-.227.047-.184-.125l.153-.637a.565.565 0 00-.164-.515l-.465-.403c-.133-.113-.098-.21.078-.214l.648-.02a.472.472 0 00.407-.316l.203-.692c.05-.168.136-.172.195-.008l.246.684c.059.168.25.305.422.305l.664.008c.176 0 .207.097.078.21l-.504.442a.551.551 0 00-.152.515l.16.56c.05.167-.031.23-.18.14l-.539-.332a.512.512 0 00-.527.015zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__g)">
        <g clipPath="url(#PapuaNewGuinea_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M7.078 22.281c-.14.102-.226.047-.183-.125l.152-.633a.569.569 0 00-.164-.52l-.465-.401c-.133-.114-.098-.211.078-.215l.649-.02a.466.466 0 00.406-.316l.203-.692c.047-.168.137-.172.195-.007l.246.687c.059.164.25.3.422.3l.664.009c.172 0 .207.097.078.21L8.855 21a.551.551 0 00-.152.516l.16.558c.051.168-.031.23-.18.14l-.538-.331a.511.511 0 00-.528.015zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__i)">
        <g clipPath="url(#PapuaNewGuinea_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M8.43 17.512c-.098.07-.157.031-.125-.086l.101-.438a.399.399 0 00-.113-.355l-.313-.278c-.09-.078-.066-.144.051-.148l.442-.012a.324.324 0 00.277-.218l.137-.477c.035-.113.093-.117.136-.004l.165.473a.337.337 0 00.289.207l.453.004c.117.004.14.066.05.148l-.343.305a.378.378 0 00-.102.351l.11.387c.035.113-.024.156-.125.094l-.364-.227a.349.349 0 00-.36.012zm0 0"
            fill="#fff"
          />
        </g>
      </g>
      <g clipPath="url(#PapuaNewGuinea_svg_prefix__k)" clipRule="evenodd">
        <path
          d="M-.527 0h37.515v24.992zm0 0"
          fillRule="evenodd"
          fill="#ed5565"
        />
      </g>
      <path
        d="M22.344 7.36l6.004.515-1.684 6.172zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
      />
      <path
        d="M29.879 2.434l-1.973 5.73 6.29.961zm0 0"
        fillRule="evenodd"
        fill="#f5d55f"
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
