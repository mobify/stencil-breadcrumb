require.config({
    paths: {
        'dust-full': '../../node_modules/dustjs-linkedin/dist/dust-full',
        'adaptivejs': '../../node_modules/adaptivejs'
    },
    shim: {
        'dust-full': {
            'exports': 'dust'
        }
    },
});

require([
    'dust-full',
    'adaptivejs/lib/dust-component-helper',
    'adaptivejs/lib/dust-component-sugar',
    '../../tmp/templates',
    '../../breadcrumb-ui'
], function(
    dust,
    componentHelper,
    componentSugar,
    templates,
    ui
) {
    var context;

    // Register helpers for precompiled component templates.
    dust = componentHelper(dust);
    templates.forEach(function(name) {
        dust.helpers[name] = componentSugar.makeHelper(name);
    });

    // Define any context required for the tests:
    var context = {
        repo: 'https://github.com/mobify/stencil-breadcrumb',
        selectMarkup: 'Insert example markup here',
        items:
            [{
                'href':'/foo',
                'label':'foo'
            },
            {
                'href':'/foo',
                'label':'foo2'
            },
            {
                'href':'/foo',
                'label':'foo3'
            },
            {
                'href':'/foo',
                'label':'foo4'
            },
            {
                'href':'/foo',
                'label':'foo5'
            },
            {
                'href':'/foo',
                'label':'foo6'
            },
            {
                'href':'/foo',
                'label':'foo7'
            },
            {
                'href':'/foo',
                'label':'foo8'
            },
            {
                'href':'/foo',
                'label':'foo9'
            },
            {
                'href':'/foo',
                'label':'foo10'
            }],
        id: 23
    };

    // Render
    dust.render('tests', context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
