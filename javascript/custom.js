$(document).ready(function () {
    $(".open").click(function () {
        $("body").addClass("toggle");
    });
});
$(document).ready(function () {
    $(".closebutton").click(function () {
        $("body").removeClass("toggle");
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
});

