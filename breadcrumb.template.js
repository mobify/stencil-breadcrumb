/**
 * Loader for the component’s  Dust templates
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var breadcrumb = require('text!./breadcrumb.dust');
    var breadcrumbItem = require('text!./breadcrumb__item.dust');

    dust.loadSource(dust.compileComponent(breadcrumb, 'breadcrumb'));
    dust.loadSource(dust.compileComponent(breadcrumbItem, 'breadcrumb__item'));
});
