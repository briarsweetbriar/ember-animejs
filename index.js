
/* jshint node: true */
'use strict';

var path = require('path');
var pickFiles = require('broccoli-static-compiler');

function findRoot(current) {
  var app;

  do {
    app = current.app || app;
  } while (current.parent && current.parent.parent && (current = current.parent));

  return app;
}

module.exports = {
  name: 'ember-animejs',

  treeForVendor: function(){
    var treePath = path.dirname(require.resolve('animejs'));
    return pickFiles(this.treeGenerator(treePath), {
      srcDir: '/',
      destDir: 'animejs'
    });
  },

  treeForAddon: function(app) {
    var app = findRoot(this);

    app.import('vendor/animejs/anime.js');

    return this._super.treeForAddon.apply(this, arguments);
  }
};
