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
        <clipPath id="Ethiopia_svg_prefix__a">
          <path d="M0 0h37v9H0zm0 0" />
        </clipPath>
        <clipPath id="Ethiopia_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Ethiopia_svg_prefix__c">
          <path d="M0 8h37v10H0zm0 0" />
        </clipPath>
        <clipPath id="Ethiopia_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Ethiopia_svg_prefix__a)">
        <g clipPath="url(#Ethiopia_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#51c161"
          />
        </g>
      </g>
      <g clipPath="url(#Ethiopia_svg_prefix__c)">
        <g clipPath="url(#Ethiopia_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 8.508h36.988v8.508H0zm0 0"
            fillRule="evenodd"
            fill="#ffcd53"
          />
        </g>
      </g>
      <path
        d="M18.758 4.785c4.234 0 7.664 3.453 7.664 7.711 0 4.258-3.43 7.711-7.664 7.711-4.23 0-7.66-3.453-7.66-7.71 0-4.259 3.43-7.712 7.66-7.712zm0 0"
        fillRule="evenodd"
        fill="#8bb9e1"
      />
      <path
        d="M16.254 17.375c-.484.348-.766.152-.625-.434l.523-2.175c.141-.586-.113-1.383-.562-1.774l-1.582-1.379c-.453-.39-.336-.726.258-.742l2.214-.062c.594-.016 1.215-.504 1.387-1.079l.692-2.378c.168-.579.472-.586.671-.02l.836 2.344c.204.566.852 1.035 1.446 1.039l2.258.023c.593.008.714.336.265.73l-1.719 1.512c-.449.395-.68 1.192-.511 1.77l.547 1.914c.168.578-.114.793-.618.48l-1.836-1.14c-.507-.317-1.316-.29-1.8.058zm0 0"
        fill="#ffcd53"
      />
      <path
        d="M16.809 16.348c-.387.273-.614.12-.5-.348l.418-1.742c.113-.465-.09-1.106-.45-1.418l-1.27-1.102c-.359-.316-.265-.582.212-.593l1.77-.051c.476-.016.972-.403 1.109-.864l.554-1.902c.133-.46.375-.469.54-.015l.667 1.874c.16.454.68.829 1.157.833l1.804.02c.477.003.57.265.211.581l-1.375 1.211c-.355.316-.543.953-.41 1.414l.442 1.531c.132.461-.09.633-.497.383l-1.468-.914c-.407-.25-1.055-.226-1.442.047zm0 0"
        fill="#8bb9e1"
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
