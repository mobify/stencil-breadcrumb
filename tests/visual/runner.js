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
    '$',
    'dust-full',
    'adaptivejs/lib/dust-component-helper',
    'adaptivejs/lib/dust-component-sugar',
    '../../tmp/templates',
    '../../breadcrumbs-ui'
], function(
    $,
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

    var items = '<li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Home</a></li><li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Homeware</a></li><li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Kitchen</a></li><li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Cooking & Baking</a></li><li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Outdoor Living</a></li><li class="c-breadcrumbs__item"><a href="/#" class="c-breadcrumbs__link">Tools & Hardware</a></li>';

    // Define any context required for the tests:
    var context = {
        repo: 'https://github.com/mobify/stencil-breadcrumbs',
        breadcrumbsListMarkup: items,
        class: 'foo',
        items: [
            {
                'href':'/#',
                'label':'Home'
            },
            {
                'href':'/#',
                'label':'Homeware',
                'class': 'foo'
            },
            {
                'href':'/#',
                'label':'Kitchen'
            },
            {
                'href':'/#',
                'label':'Cooking & Baking',
                'isActive': true
            }
        ]
    };

    // Render and initialize component ui.
    dust.render('tests', context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;

            $('[data-adaptivejs-component="stencil-breadcrumbs"]').each(function(i, el) {
                ui.init($(el));
            });
        } else {
            console.log(err);
        }
    });
});
