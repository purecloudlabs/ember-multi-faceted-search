const config = require('ember-chromium').getTestemConfig();

config.test_page = "tests/index.html?hidepassed";

module.exports = config;
/*jshint node:true*/
// module.exports = {
//   "framework": "qunit",
//   "test_page": "tests/index.html?hidepassed",
//   "disable_watching": true,
//   "launch_in_ci": [
//     "PhantomJS"
//   ],
//   "launch_in_dev": [
//     "PhantomJS",
//     "Chrome"
//   ]
// };