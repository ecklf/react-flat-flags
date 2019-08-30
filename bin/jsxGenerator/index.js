import svgr from '@svgr/core';
import template from './template';

export default (componentName, svgCode) => {
  return (
    svgr
      .sync(svgCode, {
        template,
        svgo: false,
        svgProps: {size: '{size}', width: '{width}', height: '{height}'},
        componentName: componentName,
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
      })
      .replace(/...props/, '...otherProps')
      // Generate unique id's to prevent conflicts
      .replace(/id="/gm, `id="${componentName}_svg_`)
      .replace(/url\(#/gm, `url(#${componentName}_svg_`)
  );
};
