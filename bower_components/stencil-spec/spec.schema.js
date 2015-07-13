/**
 * Describes the data expected by a component’s dust template
 *
 * We express this using js-schema, a format for describing and validating
 * object data. Example:
 *
 * var CardContext = schema({          // expected context for a Card component
 *     'heading': String,              // required; must be a string
 *     '?class': String,               // optional; if present must be a string
 *     '?actions': Array,
 *     '?isPromoted': Boolean,
 *     'content': [Object, Function],  // required; object or function
 * });
 *
 * Note: Zepto/jQuery elements should validate as type Object.
 *
 * For the complete API, see https://github.com/molnarg/js-schema/
 */
define(function(require) {
    var schema = require('js-schema');

    return schema({
        'for': String, // component name
        'repo': String, // repository url
        'tests': [
            {
                'describe': String,
                'cases': [
                    {
                        'expect': String,
                        'run': [String, Object, Function],
                    }
                ]
            }
        ]
    });
});
