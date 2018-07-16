/**
 * remove-debugger.js
 * Removes all debugger statements
 */
module.exports = function(file, api, printOptions) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.DebuggerStatement)
    .remove()
    .toSource(printOptions);
};