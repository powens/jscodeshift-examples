/**
 * Rename all import x from 'react-addons-test-utils' to 'react-dom/test-utils'
 */
module.exports = function(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration, {
      source: {
        value: 'react-addons-test-utils'
      }
    })
    .forEach(path => {
      path.value.source.value = 'react-dom/test-utils';
    })
    .toSource({ quote: 'single' });
};
