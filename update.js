#!/usr/bin/env node

'use strict';
if (!process.argv[2]) {
  console.error('Usage: update.js path/to/node/project');
  process.exit(1);
}

const fs = require('fs');
const fse = require('fs-extra')
const path = require('path');

fse.removeSync('./rules');
fse.removeSync('./index.js');

const dontCopy = [
  'documented-errors'
];

const NODE_DIR = process.argv[2];
const rulesDir = path.join(NODE_DIR, 'tools', 'eslint-rules');
fse.ensureDirSync('./rules');
fse.copySync(rulesDir, './rules', {
  filter(src, dest) {
    return !dontCopy.find(item => src.includes(item));
  }
});

const dontInclude = [
  'rules-utils'
].concat(dontCopy);

const rulesNames = fs.readdirSync(rulesDir)
  .map(item => item.replace(/\.js$/, ''))
  .filter(rule => !dontInclude.includes(rule));

const rules = rulesNames.map(
  rule => `    '${rule}':\n      require('./rules/${rule}.js'),`)
  .join('\n');

const template =
`'use strict';

module.exports = {
  rules: {
${rules}
  }
};
`

fs.writeFileSync('./index.js', template);

console.log('Generated rules:\n');
console.log(rulesNames.map(item => `- ${item}`).join('\n'));
