define([
    '$'
], function($) {

    var init = function() {
        var $breadcrumbs = $('.c-breadcrumbs');

        $breadcrumbs.each(function() {
            var $this = $(this);
            var $links = $this.find('.c-breadcrumbs__item');
            var showMoreText = "Show more breadcrumbs items";
            var $showMore = $('<li class="c-breadcrumbs__item"><button class="c-breadcrumbs__link c--show-more" type="button">' + showMoreText + '</button></li>');
            var containerWidth = $this.width();
            var linkWidth = 0;

            // Calculating the total width of the items
            $links.each(function() {
                linkWidth = linkWidth + $(this).width();
            });

            // If the items extend pass the container, truncate the items
            if (linkWidth > containerWidth) {
                $this.find('.c-breadcrumbs__item:not(:first-child):not(:last-child)').attr('hidden', '');

                // Insert 'show more' item before last breadcrumb item
                $showMore.insertBefore(
                    $this.find('.c-breadcrumbs__item').last()
                );

                // Add on click event to remove 'show more' item and display hidden items
                $this.on('click', '.c-breadcrumbs__link.c--show-more', function(){
                    var $hidden = $this.find('[hidden]').removeAttr('hidden');
                    var scrollToRight = linkWidth - $this.width();

                    // Add 'hidden' attribute to 'show more' item
                    $('.c-breadcrumbs__link.c--show-more').parent().attr('hidden', '');

                    // Add focus to last item
                    $this.last().find('.c-breadcrumbs__link').focus();

                    // Scroll to right
                    $this.scrollLeft(scrollToRight);
                });
            }
        });
    };

    return {
        init: init
    };
});
