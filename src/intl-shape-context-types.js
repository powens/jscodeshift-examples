'use strict';

const INTL_SHAPE = 'intlShape';
const MODULE_NAME = 'react-intl';


function findReactImport(j, root) {
  let target = null;

  root
    .find(j.ImportDeclaration)
    .forEach(path => {
      const name = path.value.source.value.toLowerCase();
      if (name === 'react') {
        target = path;
      }
    });

  return target;
}

function hasReactIntlImport(j, root) {
  return root
    .find(j.ImportDeclaration, {
      source: { value: 'react-intl' }
    })
    .length > 0;
}

function addIntlShapeToExistingImport(j, root) {
  const intlSpecifier = j.importSpecifier(j.identifier('intlShape'));

  const intlImport = root
    .find(j.ImportDeclaration, {
      source: {
        value: 'react-intl',
      }
    }).get().value.specifiers.push(intlSpecifier);
}

function addNewIntlShapeImport(j, root) {
  const path = findReactImport(j, root);
  const importStatement = j.importDeclaration(
    [j.importSpecifier(j.identifier(INTL_SHAPE))],
    j.literal(MODULE_NAME)
  );
  j(path).insertAfter(importStatement);
}

function addReactIntlImport(j, root) {
  if (hasReactIntlImport(j, root)) {
    addIntlShapeToExistingImport(j, root);
  } else {
    addNewIntlShapeImport(j, root);
  }
}

function getIntlContextType(j, root) {
  const contextType = root.find(j.ClassProperty, {
    key: {
      name: 'contextTypes'
    }
  });
  const hasContextType = contextType.size() > 0;

  if (hasContextType) {
    return contextType.find(j.MemberExpression, {
      object: {
        name: 'PropTypes'
      },
      property: {
        name: 'object'
      }
    });
  }
  return false;
}

function replaceIntlContextType(j, intlContextType) {
  intlContextType.replaceWith(
    j.identifier('intlShape')
  );
}

module.exports = function(file, api, options) {
  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
    lineTerminator: '\n',
  };

  const j = api.jscodeshift;

  const root = j(file.source);

  const intlContextType = getIntlContextType(j, root);
  const hasIntlInContextType = intlContextType && intlContextType.size() > 0;

  if (hasIntlInContextType) {
    addReactIntlImport(j, root);
    replaceIntlContextType(j, intlContextType);
    return root.toSource(printOptions);
  }

  return null;
};