function template(
  {template},
  opts,
  {imports, componentName, props, jsx, exports},
) {
  return template.ast`
    ${imports}
    import PropTypes from "prop-types";
    const ${componentName} = ({size, width, height, ...otherProps}) => {

      if (size !== height) {
        width = width * (size / height);
        height = height * (size / height);
      }
      return (
        ${jsx}
      )
    }

    ${componentName}.propTypes = {
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    ${componentName}.defaultProps = {
      size: "25",
      width: "37",
      height: "25",
    };

    ${exports}
  `;
}
module.exports = template;
