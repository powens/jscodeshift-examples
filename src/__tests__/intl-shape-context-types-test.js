'use strict';

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(__dirname, 'intl-shape-context-types');
defineTest(__dirname, 'intl-shape-context-types', null, 'intl-shape-context-types2');
defineTest(__dirname, 'intl-shape-context-types', null, 'intl-shape-context-types3');
