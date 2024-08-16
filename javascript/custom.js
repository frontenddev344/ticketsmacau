$(document).ready(function () {
    $(".open").click(function () {
        $("body").addClass("toggle");
    });
});
// slider
$(document).ready(function () {
    $(".promotions-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
        ]
    });
});
$(document).ready(function () {
    $(".closebutton").click(function () {
        $("body").removeClass("toggle");
    });
});

// cookies
const cookiesBox = document.querySelector('.wrapper'),
    buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
    if (document.cookie.includes('AlexGolovanov')) return;
    cookiesBox.classList.add('show');

    // ---- ---- Button ---- ---- //
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            cookiesBox.classList.remove('show');

            // ---- ---- Time ---- ---- //
            if (button.id == 'acceptBtn') {
                document.cookie =
                    'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener('load', executeCodes);

