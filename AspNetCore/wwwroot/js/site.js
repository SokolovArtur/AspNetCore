/* Write your Javascript code. */

function StickyFooter() {
    var heightBrowser = $(window).height();
    var heightContainerBlock = $(document).height();

    (heightContainerBlock <= heightBrowser) ? $("footer").addClass("fixed-bottom") : $("footer").removeClass("fixed-bottom");
}

$(document).ready(function () {
    StickyFooter();

    $(window).resize(function () {
        StickyFooter();
    });
});
