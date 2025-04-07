$(function () {

    // -----ハンバーガーメニュー

    $(".toggle-btn").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        }

        else {
            $("header").addClass("open");
        }
    });

    $(".header-menu").on("click", function () {
        $("header").removeClass("open");
    });

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    $("nav a").on("click", function () {
        $("header").removeClass("open");
    });


    // -----fadein

    $(window).scroll(function () {
        $(".fadein-right").each(function () {

            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {
                $(this).addClass("fadein-1");
            }
        });
    });

    $(window).scroll(function () {
        $(".fadein-left").each(function () {

            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {
                $(this).addClass("fadein-2");
            }
        });
    });

    // pop up

    $(window).scroll(function () {
        $(".popup").each(function () {

            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 150) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });




});


// -----Slick
$(".slick-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerPadding: "50px",
                slidesToShow: 1,
            },
        },
    ],
});