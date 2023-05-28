// npm - global command; comes with node
// npm --version

// local dependency - to be used only in this particular project
// npm i <packageName>

// global dependency - can be used in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project or package)
// manual approach (create package.json in the root, create projects etc)
// npm init (step-by-step; press enter to skip)
// npm init -y (default setup)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);