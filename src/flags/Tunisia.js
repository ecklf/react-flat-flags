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
      <g fillRule="evenodd">
        <path
          d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
          fill="#ed5565"
        />
        <path
          d="M18.496 5.848c3.5 0 6.34 2.859 6.34 6.382 0 3.524-2.84 6.38-6.34 6.38-3.504 0-6.344-2.856-6.344-6.38 0-3.523 2.84-6.382 6.344-6.382zm0 0"
          fill="#fff"
        />
        <path
          d="M21.074 15.742c-.004 0-.012.004-.015.004a3.992 3.992 0 01-.614.238c-2.054.598-4.191-.57-4.773-2.609a3.832 3.832 0 01-.145-1.18 3.906 3.906 0 015.09-3.656c.211.066.41.152.602.254v-.004a.03.03 0 00.015.008.134.134 0 00.168-.082.132.132 0 00-.047-.149 4.743 4.743 0 00-1.664-.937c-2.543-.82-5.293.574-6.14 3.117-.156.473-.239.95-.246 1.422-.012.469.047.95.183 1.426.73 2.562 3.41 4.027 5.989 3.273a4.877 4.877 0 001.707-.89.135.135 0 00.054-.149.13.13 0 00-.164-.086zm-.351-1.59c-.2.133-.313.051-.246-.18l.246-.863a.79.79 0 00-.203-.714l-.618-.57c-.175-.165-.125-.298.114-.294l.898.004c.242.004.5-.183.578-.41l.317-.938c.074-.226.199-.226.27 0l.304.95c.07.226.328.422.566.433l.914.043c.242.012.285.14.098.293l-.719.582a.74.74 0 00-.234.696l.191.773c.059.23-.058.313-.258.18l-.722-.48a.72.72 0 00-.73 0zm0 0"
          fill="#ed5565"
        />
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
