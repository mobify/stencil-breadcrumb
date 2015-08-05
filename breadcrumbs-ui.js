define([
    '$'
], function($) {

    var Breadcrumbs = function Breadcrumbs($el) {
        this.$el = $el;

        var $links = this.$el.find('.c-breadcrumbs__item');
        var showMoreText = "Show more breadcrumbs items";
        var $showMore = $('<li class="c-breadcrumbs__item"><button class="c-breadcrumbs__link c--show-more" type="button">' + showMoreText + '</button></li>');
        var containerWidth = this.$el.width();
        var contentWidth = 0;

        $links.each(function() {
            // link width of item with margin-left value
            var linkWidth = $(this).width() + parseInt( $(this).css('margin-left') );

            contentWidth = contentWidth + linkWidth;
        });

        // If the items extend pass the container, truncate the items
        if (contentWidth > containerWidth) {
            this.$el.find('.c-breadcrumbs__item:not(:first-child):not(:last-child)').attr('hidden', '');

            // Insert 'show more' item before last breadcrumb item
            $showMore.insertBefore(
                this.$el.find('.c-breadcrumbs__item').last()
            );

            // Add on click event to remove 'show more' item and display hidden items
            var onClickHandler = function(){
                var $hidden = this.$el.find('[hidden]').removeAttr('hidden');
                var scrollToRight = contentWidth - this.$el.width();

                // Add 'hidden' attribute to 'show more' item
                $('.c-breadcrumbs__link.c--show-more').parent().attr('hidden', '');

                // Add focus to last item
                this.$el.last().find('.c-breadcrumbs__link').focus();

                // Scroll to right
                this.$el.scrollLeft(scrollToRight);
            };

            // use proxy event handler to execute with the current scope
            this.$el.on('click', '.c-breadcrumbs__link.c--show-more', $.proxy(onClickHandler, this));
        }
    };

    return {
        // If already initialized, return the instance; otherwise, create it
        // and expose it through `$('.c-breadcrumbs').data('component')`.
        'init': function($el, options) {
            return $el.data('component') || $el.data('component', new Breadcrumbs($el, options));
        }
    };
});
