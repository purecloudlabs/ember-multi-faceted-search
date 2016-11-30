/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-multi-faceted-search',

  isDevelopingAddon: function() {
    return true;
  },

  included(parent) {
    this._super.included.apply(this, arguments);

    // Find the top-level app if this is nested within other addons
    while (parent.app) {
      parent = parent.app;
    }
    // import stuff using 'parent'
  }
};
