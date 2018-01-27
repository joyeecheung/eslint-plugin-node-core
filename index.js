'use strict';

module.exports = {
  rules: {
    'alphabetize-errors':
      require('./rules/alphabetize-errors.js'),
    'buffer-constructor':
      require('./rules/buffer-constructor.js'),
    'crypto-check':
      require('./rules/crypto-check.js'),
    'inspector-check':
      require('./rules/inspector-check.js'),
    'lowercase-name-for-primitive':
      require('./rules/lowercase-name-for-primitive.js'),
    'no-let-in-for-declaration':
      require('./rules/no-let-in-for-declaration.js'),
    'no-unescaped-regexp-dot':
      require('./rules/no-unescaped-regexp-dot.js'),
    'number-isnan':
      require('./rules/number-isnan.js'),
    'prefer-assert-iferror':
      require('./rules/prefer-assert-iferror.js'),
    'prefer-assert-methods':
      require('./rules/prefer-assert-methods.js'),
    'prefer-common-expectserror':
      require('./rules/prefer-common-expectserror.js'),
    'prefer-common-mustnotcall':
      require('./rules/prefer-common-mustnotcall.js'),
    'prefer-util-format-errors':
      require('./rules/prefer-util-format-errors.js'),
    'require-buffer':
      require('./rules/require-buffer.js'),
    'required-modules':
      require('./rules/required-modules.js'),
  }
};
