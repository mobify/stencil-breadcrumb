/**
 * Loader for the component’s  Dust templates
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var breadcrumb = require('text!./breadcrumb.dust');

    dust.loadSource(dust.compileComponent(breadcrumb, 'breadcrumb'));
});
