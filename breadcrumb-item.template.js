/**
 * Loader for the component’s  Dust templates
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var breadcrumbItem = require('text!./breadcrumb-item.dust');

    dust.loadSource(dust.compileComponent(breadcrumbItem, 'breadcrumb-item'));
});
